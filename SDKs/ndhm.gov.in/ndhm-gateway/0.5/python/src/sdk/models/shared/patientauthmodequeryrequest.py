import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientauthpurpose_enum as shared_patientauthpurpose_enum

class PatientAuthModeQueryRequestQueryRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclasses.dataclass
class PatientAuthModeQueryRequestQueryRequester:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PatientAuthModeQueryRequestQueryRequesterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientAuthModeQueryRequestQuery:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    purpose: shared_patientauthpurpose_enum.PatientAuthPurposeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: PatientAuthModeQueryRequestQueryRequester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientAuthModeQueryRequest:
    query: PatientAuthModeQueryRequestQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
