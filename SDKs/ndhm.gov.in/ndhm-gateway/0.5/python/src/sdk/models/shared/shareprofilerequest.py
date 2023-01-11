import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientaddress as shared_patientaddress
from ..shared import patientgender_enum as shared_patientgender_enum
from ..shared import identifier as shared_identifier


@dataclass_json
@dataclasses.dataclass
class ShareProfileRequestPatientUserDemographics:
    gender: shared_patientgender_enum.PatientGenderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    health_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthId') }})
    health_id_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthIdNumber') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    year_of_birth: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfBirth') }})
    address: Optional[shared_patientaddress.PatientAddress] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    day_of_birth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfBirth') }})
    identifiers: Optional[list[shared_identifier.Identifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    month_of_birth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthOfBirth') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareProfileRequestPatient:
    user_demographics: ShareProfileRequestPatientUserDemographics = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDemographics') }})
    hip_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hipCode') }})
    

@dataclass_json
@dataclasses.dataclass
class ShareProfileRequest:
    patient: ShareProfileRequestPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
