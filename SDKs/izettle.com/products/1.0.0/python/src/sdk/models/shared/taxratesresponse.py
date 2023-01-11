import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taxrate as shared_taxrate


@dataclass_json
@dataclasses.dataclass
class TaxRatesResponse:
    tax_rates: Optional[list[shared_taxrate.TaxRate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRates') }})
    
