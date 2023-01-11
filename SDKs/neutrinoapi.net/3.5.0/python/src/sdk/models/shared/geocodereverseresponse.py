import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timezone as shared_timezone


@dataclass_json
@dataclasses.dataclass
class GeocodeReverseResponse:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    address_components: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressComponents') }})
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    country_code3: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode3') }})
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    found: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('found') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    location_tags: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationTags') }})
    location_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timezone: dict[str, shared_timezone.Timezone] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    
