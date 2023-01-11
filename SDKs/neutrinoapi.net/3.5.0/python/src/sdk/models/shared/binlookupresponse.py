import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BinLookupResponse:
    card_brand: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardBrand') }})
    card_category: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardCategory') }})
    card_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardType') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    ip_blocklisted: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipBlocklisted') }})
    ip_blocklists: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipBlocklists') }})
    ip_city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCity') }})
    ip_country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCountry') }})
    ip_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCountryCode') }})
    ip_country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCountryCode3') }})
    ip_matches_bin: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipMatchesBin') }})
    ip_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipRegion') }})
    is_commercial: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCommercial') }})
    is_prepaid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPrepaid') }})
    issuer: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    issuer_phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerPhone') }})
    issuer_website: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuerWebsite') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
