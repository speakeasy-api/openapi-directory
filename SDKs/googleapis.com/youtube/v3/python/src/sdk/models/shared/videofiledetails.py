import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videofiledetailsaudiostream as shared_videofiledetailsaudiostream
from ..shared import videofiledetailsvideostream as shared_videofiledetailsvideostream

class VideoFileDetailsFileTypeEnum(str, Enum):
    VIDEO = "video"
    AUDIO = "audio"
    IMAGE = "image"
    ARCHIVE = "archive"
    DOCUMENT = "document"
    PROJECT = "project"
    OTHER = "other"


@dataclass_json
@dataclasses.dataclass
class VideoFileDetails:
    r"""VideoFileDetails
    Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
    """
    
    audio_streams: Optional[list[shared_videofiledetailsaudiostream.VideoFileDetailsAudioStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioStreams') }})
    bitrate_bps: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrateBps') }})
    container: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    creation_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    duration_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMs') }})
    file_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    file_size: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSize') }})
    file_type: Optional[VideoFileDetailsFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    video_streams: Optional[list[shared_videofiledetailsvideostream.VideoFileDetailsVideoStream]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoStreams') }})
    
