import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AddressToValidate:
    r"""AddressToValidate
    A complete or partial mailing address.
    """
    
    address_line1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line1') }})
    city_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city_locality') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    state_province: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state_province') }})
    address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line2') }})
    address_line3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_line3') }})
    address_residential_indicator: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_residential_indicator') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    
