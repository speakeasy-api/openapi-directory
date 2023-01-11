import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VeteranStatusRequestGenderEnum(str, Enum):
    M = "M"
    F = "F"


@dataclass_json
@dataclasses.dataclass
class VeteranStatusRequest:
    r"""VeteranStatusRequest
    Attributes required to retrieve a Veteran's status
    """
    
    birth_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('birth_date') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    ssn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    gender: Optional[VeteranStatusRequestGenderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    middle_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    
