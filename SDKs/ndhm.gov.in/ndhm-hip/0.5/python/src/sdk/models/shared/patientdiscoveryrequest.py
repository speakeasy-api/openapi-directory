import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identifier as shared_identifier

class PatientDiscoveryRequestPatientGenderEnum(str, Enum):
    M = "M"
    F = "F"
    O = "O"
    U = "U"


@dataclass_json
@dataclasses.dataclass
class PatientDiscoveryRequestPatient:
    gender: PatientDiscoveryRequestPatientGenderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    verified_identifiers: list[shared_identifier.Identifier] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedIdentifiers') }})
    year_of_birth: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfBirth') }})
    unverified_identifiers: Optional[list[shared_identifier.Identifier]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unverifiedIdentifiers') }})
    

@dataclass_json
@dataclasses.dataclass
class PatientDiscoveryRequest:
    patient: PatientDiscoveryRequestPatient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
