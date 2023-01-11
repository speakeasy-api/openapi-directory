import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timezone as shared_timezone


@dataclass_json
@dataclasses.dataclass
class IPInfoResponse:
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    continent_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    host_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostDomain') }})
    hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    is_bogon: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBogon') }})
    is_v4_mapped: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isV4Mapped') }})
    is_v6: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isV6') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    timezone: dict[str, shared_timezone.Timezone] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
