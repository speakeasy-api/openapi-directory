import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patientgender_enum as shared_patientgender_enum
from ..shared import authconfirmidentifier as shared_authconfirmidentifier


@dataclass_json
@dataclasses.dataclass
class PatientDemographic:
    r"""PatientDemographic
    demographic details are only required for demographic auth at this point, in which case identifier.Type must be AADHAAR.
    """
    
    date_of_birth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth') }})
    gender: shared_patientgender_enum.PatientGenderEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    identifier: Optional[shared_authconfirmidentifier.AuthConfirmIdentifier] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    
