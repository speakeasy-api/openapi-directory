import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LicenseEditorialVideoContentLicenseEnum(str, Enum):
    PREMIER_EDITORIAL_VIDEO_DIGITAL_ONLY = "premier_editorial_video_digital_only"
    PREMIER_EDITORIAL_VIDEO_ALL_MEDIA = "premier_editorial_video_all_media"
    PREMIER_EDITORIAL_VIDEO_ALL_MEDIA_SINGLE_TERRITORY = "premier_editorial_video_all_media_single_territory"
    PREMIER_EDITORIAL_VIDEO_COMP = "premier_editorial_video_comp"

class LicenseEditorialVideoContentSizeEnum(str, Enum):
    ORIGINAL = "original"


@dataclass_json
@dataclasses.dataclass
class LicenseEditorialVideoContent:
    r"""LicenseEditorialVideoContent
    Individual editorial video content to license
    """
    
    editorial_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('editorial_id') }})
    license: LicenseEditorialVideoContentLicenseEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    size: Optional[LicenseEditorialVideoContentSizeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
