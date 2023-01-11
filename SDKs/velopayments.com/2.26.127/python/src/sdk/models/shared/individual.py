import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Individual:
    date_of_birth: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth') }})
    name: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    national_identification: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalIdentification') }})
    

@dataclass_json
@dataclasses.dataclass
class IndividualInput:
    name: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
