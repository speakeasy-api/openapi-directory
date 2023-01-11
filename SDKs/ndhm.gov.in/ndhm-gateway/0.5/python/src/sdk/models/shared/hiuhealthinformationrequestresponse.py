import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference

class HiuHealthInformationRequestResponseHiRequestSessionStatusEnum(str, Enum):
    REQUESTED = "REQUESTED"
    ACKNOWLEDGED = "ACKNOWLEDGED"


@dataclass_json
@dataclasses.dataclass
class HiuHealthInformationRequestResponseHiRequest:
    session_status: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionStatus') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    

@dataclass_json
@dataclasses.dataclass
class HiuHealthInformationRequestResponse:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    hi_request: Optional[HiuHealthInformationRequestResponseHiRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiRequest') }})
    
