import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import regionproposal as shared_regionproposal


@dataclass_json
@dataclasses.dataclass
class ImageRegionProposal:
    image_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    proposals: Optional[list[shared_regionproposal.RegionProposal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposals') }})
    
