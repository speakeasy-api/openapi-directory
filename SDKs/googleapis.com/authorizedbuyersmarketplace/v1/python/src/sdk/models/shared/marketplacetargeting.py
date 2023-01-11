import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dayparttargeting as shared_dayparttargeting
from ..shared import criteriatargeting as shared_criteriatargeting
from ..shared import inventorysizetargeting as shared_inventorysizetargeting
from ..shared import inventorytypetargeting as shared_inventorytypetargeting
from ..shared import placementtargeting as shared_placementtargeting
from ..shared import technologytargeting as shared_technologytargeting
from ..shared import videotargeting as shared_videotargeting


@dataclass_json
@dataclasses.dataclass
class MarketplaceTargeting:
    r"""MarketplaceTargeting
    Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
    """
    
    daypart_targeting: Optional[shared_dayparttargeting.DayPartTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daypartTargeting') }})
    geo_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[shared_inventorysizetargeting.InventorySizeTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    inventory_type_targeting: Optional[shared_inventorytypetargeting.InventoryTypeTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryTypeTargeting') }})
    placement_targeting: Optional[shared_placementtargeting.PlacementTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTargeting') }})
    technology_targeting: Optional[shared_technologytargeting.TechnologyTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    user_list_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userListTargeting') }})
    video_targeting: Optional[shared_videotargeting.VideoTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoTargeting') }})
    
