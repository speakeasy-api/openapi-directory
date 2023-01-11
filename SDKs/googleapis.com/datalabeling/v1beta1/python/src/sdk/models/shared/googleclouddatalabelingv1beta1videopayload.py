import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1videothumbnail as shared_googleclouddatalabelingv1beta1videothumbnail


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1VideoPayload:
    r"""GoogleCloudDatalabelingV1beta1VideoPayload
    Container of information of a video.
    """
    
    frame_rate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRate') }})
    mime_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    signed_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signedUri') }})
    video_thumbnails: Optional[list[shared_googleclouddatalabelingv1beta1videothumbnail.GoogleCloudDatalabelingV1beta1VideoThumbnail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoThumbnails') }})
    video_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoUri') }})
    
