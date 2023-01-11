import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionbatchupdaterequest as shared_subscriptionbatchupdaterequest


@dataclass_json
@dataclasses.dataclass
class BatchInputSubscriptionBatchUpdateRequest:
    inputs: list[shared_subscriptionbatchupdaterequest.SubscriptionBatchUpdateRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
