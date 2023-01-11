import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionv2 as shared_regionv2


@dataclass_json
@dataclasses.dataclass
class SupportedCountryV2:
    currencies: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencies') }})
    iso_country_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isoCountryCode') }})
    regions: Optional[list[shared_regionv2.RegionV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
