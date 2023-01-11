import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceid as shared_resourceid


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetailsFavorite:
    r"""ActivityContentDetailsFavorite
    Information about a video that was marked as a favorite video.
    """
    
    resource_id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    
