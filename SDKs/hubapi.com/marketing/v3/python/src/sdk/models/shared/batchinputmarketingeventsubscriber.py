import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketingeventsubscriber as shared_marketingeventsubscriber


@dataclass_json
@dataclasses.dataclass
class BatchInputMarketingEventSubscriber:
    r"""BatchInputMarketingEventSubscriber
    List of HubSpot contacts to subscribe to the marketing event
    """
    
    inputs: list[shared_marketingeventsubscriber.MarketingEventSubscriber] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
