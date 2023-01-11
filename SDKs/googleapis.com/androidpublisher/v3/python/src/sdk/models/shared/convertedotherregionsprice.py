import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money


@dataclass_json
@dataclasses.dataclass
class ConvertedOtherRegionsPrice:
    r"""ConvertedOtherRegionsPrice
    Converted other regions prices.
    """
    
    eur_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eurPrice') }})
    usd_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usdPrice') }})
    
