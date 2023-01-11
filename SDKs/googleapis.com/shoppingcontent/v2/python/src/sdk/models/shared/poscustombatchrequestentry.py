import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import posinventory as shared_posinventory
from ..shared import possale as shared_possale
from ..shared import posstore as shared_posstore


@dataclass_json
@dataclasses.dataclass
class PosCustomBatchRequestEntry:
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    inventory: Optional[shared_posinventory.PosInventory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    sale: Optional[shared_possale.PosSale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sale') }})
    store: Optional[shared_posstore.PosStore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    store_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    target_merchant_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetMerchantId') }})
    
