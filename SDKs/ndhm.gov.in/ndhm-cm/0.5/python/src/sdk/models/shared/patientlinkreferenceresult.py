import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import meta as shared_meta
from ..shared import error as shared_error
from ..shared import requestreference as shared_requestreference

class PatientLinkReferenceResultLinkAuthenticationTypeEnum(str, Enum):
    DIRECT = "DIRECT"
    MEDIATED = "MEDIATED"


@dataclass_json
@dataclasses.dataclass
class PatientLinkReferenceResultLink:
    authentication_type: PatientLinkReferenceResultLinkAuthenticationTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    reference_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientLinkReferenceResult:
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: shared_requestreference.RequestReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    link: Optional[PatientLinkReferenceResultLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
