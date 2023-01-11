import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PatientIdentificationRequestQueryPatient:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PatientIdentificationRequestQueryRequesterTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclasses.dataclass
class PatientIdentificationRequestQueryRequester:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PatientIdentificationRequestQueryRequesterTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientIdentificationRequestQuery:
    patient: PatientIdentificationRequestQueryPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    requester: PatientIdentificationRequestQueryRequester = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientIdentificationRequest:
    query: PatientIdentificationRequestQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
