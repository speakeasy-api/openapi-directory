import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceid as shared_resourceid


@dataclass_json
@dataclasses.dataclass
class ActivityContentDetailsPlaylistItem:
    r"""ActivityContentDetailsPlaylistItem
    Information about a new playlist item.
    """
    
    playlist_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistId') }})
    playlist_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistItemId') }})
    resource_id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    
