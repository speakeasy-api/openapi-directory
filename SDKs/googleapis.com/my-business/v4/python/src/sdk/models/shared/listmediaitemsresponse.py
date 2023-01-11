import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaitem as shared_mediaitem


@dataclass_json
@dataclasses.dataclass
class ListMediaItemsResponse:
    r"""ListMediaItemsResponse
    Response message for Media.ListMediaItems.
    """
    
    media_items: Optional[list[shared_mediaitem.MediaItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaItems') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_media_item_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMediaItemCount') }})
    
