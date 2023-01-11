import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HlrLookupResponse:
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    current_network: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNetwork') }})
    hlr_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hlrStatus') }})
    hlr_valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hlrValid') }})
    imsi: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imsi') }})
    international_calling_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalCallingCode') }})
    international_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('internationalNumber') }})
    is_mobile: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMobile') }})
    is_ported: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPorted') }})
    is_roaming: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRoaming') }})
    local_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localNumber') }})
    location: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    mcc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mcc') }})
    mnc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mnc') }})
    msc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msc') }})
    msin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msin') }})
    number_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberType') }})
    number_valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberValid') }})
    origin_network: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originNetwork') }})
    ported_network: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portedNetwork') }})
    roaming_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roamingCountryCode') }})
    
