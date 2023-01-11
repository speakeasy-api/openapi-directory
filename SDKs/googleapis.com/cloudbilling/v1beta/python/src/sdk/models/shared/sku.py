import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class Sku:
    r"""Sku
    Information about SKUs appearing in the cost estimate.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    prices: Optional[list[shared_price.Price]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prices') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    
