import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import videosizedetails as shared_videosizedetails
from ..shared import url as shared_url
from ..shared import urls as shared_urls


@dataclass_json
@dataclasses.dataclass
class VideoAssets:
    r"""VideoAssets
    Video asset information
    """
    
    fourk: Optional[shared_videosizedetails.VideoSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4k') }})
    hd: Optional[shared_videosizedetails.VideoSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hd') }})
    preview_jpg: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_jpg') }})
    preview_mp4: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_mp4') }})
    preview_webm: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_webm') }})
    sd: Optional[shared_videosizedetails.VideoSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sd') }})
    thumb_jpg: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_jpg') }})
    thumb_jpgs: Optional[shared_urls.Urls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_jpgs') }})
    thumb_mp4: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_mp4') }})
    thumb_webm: Optional[shared_url.URL] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumb_webm') }})
    web: Optional[shared_videosizedetails.VideoSizeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }})
    
