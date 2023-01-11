import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventorysourceaccessorsadvertiseraccessors as shared_inventorysourceaccessorsadvertiseraccessors
from ..shared import inventorysourceaccessorspartneraccessor as shared_inventorysourceaccessorspartneraccessor


@dataclass_json
@dataclasses.dataclass
class InventorySourceAccessors:
    r"""InventorySourceAccessors
    The partner or advertisers with access to the inventory source.
    """
    
    advertisers: Optional[shared_inventorysourceaccessorsadvertiseraccessors.InventorySourceAccessorsAdvertiserAccessors] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisers') }})
    partner: Optional[shared_inventorysourceaccessorspartneraccessor.InventorySourceAccessorsPartnerAccessor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partner') }})
    
