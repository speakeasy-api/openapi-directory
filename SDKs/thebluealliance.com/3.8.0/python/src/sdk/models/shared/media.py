import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MediaTypeEnum(str, Enum):
    YOUTUBE = "youtube"
    CDPHOTOTHREAD = "cdphotothread"
    IMGUR = "imgur"
    FACEBOOK_PROFILE = "facebook-profile"
    YOUTUBE_CHANNEL = "youtube-channel"
    TWITTER_PROFILE = "twitter-profile"
    GITHUB_PROFILE = "github-profile"
    INSTAGRAM_PROFILE = "instagram-profile"
    PERISCOPE_PROFILE = "periscope-profile"
    GRABCAD = "grabcad"
    INSTAGRAM_IMAGE = "instagram-image"
    EXTERNAL_LINK = "external-link"
    AVATAR = "avatar"


@dataclass_json
@dataclasses.dataclass
class Media:
    r"""Media
    The `Media` object contains a reference for most any media associated with a team or event on TBA.
    """
    
    foreign_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('foreign_key') }})
    type: MediaTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    details: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    direct_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direct_url') }})
    preferred: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred') }})
    view_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_url') }})
    
