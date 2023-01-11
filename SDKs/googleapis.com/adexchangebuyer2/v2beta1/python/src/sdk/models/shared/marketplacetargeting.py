import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import criteriatargeting as shared_criteriatargeting
from ..shared import inventorysizetargeting as shared_inventorysizetargeting
from ..shared import placementtargeting as shared_placementtargeting
from ..shared import technologytargeting as shared_technologytargeting
from ..shared import videotargeting as shared_videotargeting


@dataclass_json
@dataclasses.dataclass
class MarketplaceTargeting:
    r"""MarketplaceTargeting
    Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
    """
    
    geo_targeting: Optional[shared_criteriatargeting.CriteriaTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[shared_inventorysizetargeting.InventorySizeTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    placement_targeting: Optional[shared_placementtargeting.PlacementTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTargeting') }})
    technology_targeting: Optional[shared_technologytargeting.TechnologyTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technologyTargeting') }})
    video_targeting: Optional[shared_videotargeting.VideoTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoTargeting') }})
    
