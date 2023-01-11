import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegionalPriceMigrationConfig:
    r"""RegionalPriceMigrationConfig
    Configuration for a price migration.
    """
    
    oldest_allowed_price_version_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldestAllowedPriceVersionTime') }})
    region_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
