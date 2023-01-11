import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videosizedetails as shared_videosizedetails
from ..shared import videopreviewurl as shared_videopreviewurl


@dataclass_json
@dataclasses.dataclass
class EditorialVideoAssets:
    r"""EditorialVideoAssets
    Asset information, including size and thumbnail URLs
    """
    
    original: Optional[shared_videosizedetails.VideoSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original') }})
    preview_mp4: Optional[shared_videopreviewurl.VideoPreviewURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_mp4') }})
    preview_webm: Optional[shared_videopreviewurl.VideoPreviewURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_webm') }})
    thumb_jpg: Optional[shared_videopreviewurl.VideoPreviewURL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_jpg') }})
    
