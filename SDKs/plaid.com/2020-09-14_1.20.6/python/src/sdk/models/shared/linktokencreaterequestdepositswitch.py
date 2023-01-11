import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LinkTokenCreateRequestDepositSwitch:
    r"""LinkTokenCreateRequestDepositSwitch
    Specifies options for initializing Link for use with the Deposit Switch (beta) product. This field is required if `deposit_switch` is included in the `products` array.
    """
    
    deposit_switch_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit_switch_id') }})
    
