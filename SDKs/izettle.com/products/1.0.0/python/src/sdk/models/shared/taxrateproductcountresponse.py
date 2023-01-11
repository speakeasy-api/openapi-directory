import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taxrateproductcount as shared_taxrateproductcount


@dataclass_json
@dataclasses.dataclass
class TaxRateProductCountResponse:
    counts: Optional[list[shared_taxrateproductcount.TaxRateProductCount]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    
