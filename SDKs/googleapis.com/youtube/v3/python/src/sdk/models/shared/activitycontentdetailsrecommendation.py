import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceid as shared_resourceid

class ActivityContentDetailsRecommendationReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "reasonUnspecified"
    VIDEO_FAVORITED = "videoFavorited"
    VIDEO_LIKED = "videoLiked"
    VIDEO_WATCHED = "videoWatched"


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetailsRecommendation:
    r"""ActivityContentDetailsRecommendation
    Information that identifies the recommended resource.
    """
    
    reason: Optional[ActivityContentDetailsRecommendationReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    resource_id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    seed_resource_id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedResourceId') }})
    
