import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagdata as shared_tagdata


@dataclass_json
@dataclasses.dataclass
class PlacementTag:
    r"""PlacementTag
    Placement Tag
    """
    
    placement_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementId') }})
    tag_datas: Optional[list[shared_tagdata.TagData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagDatas') }})
    
