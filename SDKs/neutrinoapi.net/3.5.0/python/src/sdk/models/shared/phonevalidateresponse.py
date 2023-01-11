import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PhoneValidateResponse:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    international_calling_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalCallingCode') }})
    international_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalNumber') }})
    is_mobile: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMobile') }})
    local_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localNumber') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    prefix_network: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixNetwork') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
