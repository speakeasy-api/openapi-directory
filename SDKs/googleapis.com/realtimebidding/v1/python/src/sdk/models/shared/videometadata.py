import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediafile as shared_mediafile

class VideoMetadataVastVersionEnum(str, Enum):
    VAST_VERSION_UNSPECIFIED = "VAST_VERSION_UNSPECIFIED"
    VAST_VERSION_1_0 = "VAST_VERSION_1_0"
    VAST_VERSION_2_0 = "VAST_VERSION_2_0"
    VAST_VERSION_3_0 = "VAST_VERSION_3_0"
    VAST_VERSION_4_0 = "VAST_VERSION_4_0"


@dataclass_json
@dataclasses.dataclass
class VideoMetadata:
    r"""VideoMetadata
    Video metadata for a creative.
    """
    
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    is_valid_vast: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isValidVast') }})
    is_vpaid: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isVpaid') }})
    media_files: Optional[list[shared_mediafile.MediaFile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaFiles') }})
    skip_offset: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipOffset') }})
    vast_version: Optional[VideoMetadataVastVersionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vastVersion') }})
    
