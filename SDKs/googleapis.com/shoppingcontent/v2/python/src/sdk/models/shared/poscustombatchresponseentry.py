import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errors as shared_errors
from ..shared import posinventory as shared_posinventory
from ..shared import possale as shared_possale
from ..shared import posstore as shared_posstore


@dataclass_json
@dataclasses.dataclass
class PosCustomBatchResponseEntry:
    batch_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[shared_errors.Errors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inventory: Optional[shared_posinventory.PosInventory] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    sale: Optional[shared_possale.PosSale] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sale') }})
    store: Optional[shared_posstore.PosStore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    
