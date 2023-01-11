import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InventorySourceFilter:
    r"""InventorySourceFilter
    A filtering option for filtering on Inventory Source entities.
    """
    
    inventory_source_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceIds') }})
    
