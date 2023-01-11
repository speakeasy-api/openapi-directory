import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketingeventemailsubscriber as shared_marketingeventemailsubscriber


@dataclass_json
@dataclasses.dataclass
class BatchInputMarketingEventEmailSubscriber:
    r"""BatchInputMarketingEventEmailSubscriber
    List of marketing event details to create or update
    """
    
    inputs: list[shared_marketingeventemailsubscriber.MarketingEventEmailSubscriber] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
