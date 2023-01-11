import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placementtag as shared_placementtag


@dataclass_json
@dataclasses.dataclass
class PlacementsGenerateTagsResponse:
    r"""PlacementsGenerateTagsResponse
    Placement GenerateTags Response
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    placement_tags: Optional[list[shared_placementtag.PlacementTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTags') }})
    
