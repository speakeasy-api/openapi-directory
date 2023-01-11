import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Address:
    r"""Address
    A complete or partial mailing address.
    """
    
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    address_residential_indicator: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_residential_indicator') }})
    city_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city_locality') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    state_province: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_province') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    address_line3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line3') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    
