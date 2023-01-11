import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class YoutubeAndPartnersInventorySourceConfig:
    r"""YoutubeAndPartnersInventorySourceConfig
    Settings that control what YouTube related inventories the YouTube and Partners line item will target.
    """
    
    include_youtube_search: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeYoutubeSearch') }})
    include_youtube_video_partners: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeYoutubeVideoPartners') }})
    include_youtube_videos: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeYoutubeVideos') }})
    
