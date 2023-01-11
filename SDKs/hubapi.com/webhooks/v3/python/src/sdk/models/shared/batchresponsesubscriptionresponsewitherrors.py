import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standarderror as shared_standarderror
from ..shared import subscriptionresponse as shared_subscriptionresponse

class BatchResponseSubscriptionResponseWithErrorsStatusEnum(str, Enum):
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    CANCELED = "CANCELED"
    COMPLETE = "COMPLETE"


@dataclass_json
@dataclasses.dataclass
class BatchResponseSubscriptionResponseWithErrors:
    completed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('completedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    results: list[shared_subscriptionresponse.SubscriptionResponse] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    started_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: BatchResponseSubscriptionResponseWithErrorsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[list[shared_standarderror.StandardError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    num_errors: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numErrors') }})
    requested_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
