import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentrating as shared_contentrating
from ..shared import accesspolicy as shared_accesspolicy
from ..shared import videocontentdetailsregionrestriction as shared_videocontentdetailsregionrestriction

class VideoContentDetailsCaptionEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class VideoContentDetailsDefinitionEnum(str, Enum):
    SD = "sd"
    HD = "hd"

class VideoContentDetailsProjectionEnum(str, Enum):
    RECTANGULAR = "rectangular"
    THREE_HUNDRED_AND_SIXTY = "360"


@dataclass_json
@dataclasses.dataclass
class VideoContentDetails:
    r"""VideoContentDetails
    Details about the content of a YouTube Video.
    """
    
    caption: Optional[VideoContentDetailsCaptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    content_rating: Optional[shared_contentrating.ContentRating] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRating') }})
    country_restriction: Optional[shared_accesspolicy.AccessPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryRestriction') }})
    definition: Optional[VideoContentDetailsDefinitionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    dimension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    has_custom_thumbnail: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasCustomThumbnail') }})
    licensed_content: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensedContent') }})
    projection: Optional[VideoContentDetailsProjectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projection') }})
    region_restriction: Optional[shared_videocontentdetailsregionrestriction.VideoContentDetailsRegionRestriction] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionRestriction') }})
    
