import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InventorySourceAccessorsPartnerAccessor:
    r"""InventorySourceAccessorsPartnerAccessor
    The partner with access to the inventory source.
    """
    
    partner_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
