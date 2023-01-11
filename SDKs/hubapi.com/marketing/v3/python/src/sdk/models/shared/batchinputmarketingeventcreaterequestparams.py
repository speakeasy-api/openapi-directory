import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import marketingeventcreaterequestparams as shared_marketingeventcreaterequestparams


@dataclass_json
@dataclasses.dataclass
class BatchInputMarketingEventCreateRequestParams:
    inputs: list[shared_marketingeventcreaterequestparams.MarketingEventCreateRequestParams] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
