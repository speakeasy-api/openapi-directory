import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionalpricemigrationconfig as shared_regionalpricemigrationconfig
from ..shared import regionsversion as shared_regionsversion


@dataclass_json
@dataclasses.dataclass
class MigrateBasePlanPricesRequest:
    r"""MigrateBasePlanPricesRequest
    Request message for MigrateBasePlanPrices.
    """
    
    regional_price_migrations: Optional[list[shared_regionalpricemigrationconfig.RegionalPriceMigrationConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalPriceMigrations') }})
    regions_version: Optional[shared_regionsversion.RegionsVersion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionsVersion') }})
    
