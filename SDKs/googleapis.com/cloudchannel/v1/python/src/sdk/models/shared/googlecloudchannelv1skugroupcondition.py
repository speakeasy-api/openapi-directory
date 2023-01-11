import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudChannelV1SkuGroupCondition:
    r"""GoogleCloudChannelV1SkuGroupCondition
    A condition that applies the override if a line item SKU is found in the SKU group.
    """
    
    sku_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skuGroup') }})
    
