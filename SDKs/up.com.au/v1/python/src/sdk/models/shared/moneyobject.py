import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MoneyObject:
    r"""MoneyObject
    Provides information about a value of money.
    
    """
    
    currency_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_in_base_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueInBaseUnits') }})
    
