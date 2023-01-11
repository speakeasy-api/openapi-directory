import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taxrate as shared_taxrate


@dataclass_json
@dataclasses.dataclass
class TaxRatesCreateRequest:
    tax_rates: list[shared_taxrate.TaxRate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxRates') }})
    
