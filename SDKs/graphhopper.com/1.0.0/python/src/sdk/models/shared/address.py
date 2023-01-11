import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddressCurbsideEnum(str, Enum):
    RIGHT = "right"
    LEFT = "left"
    ANY = "any"


@dataclass_json
@dataclasses.dataclass
class Address:
    lat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    location_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    lon: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    curbside: Optional[AddressCurbsideEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbside') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    street_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_hint') }})
    
