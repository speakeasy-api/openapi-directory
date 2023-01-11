import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playlistsresponse_playlists as shared_playlistsresponse_playlists


@dataclass_json
@dataclasses.dataclass
class PlaylistsResponse:
    has_next: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_next') }})
    has_previous: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_previous') }})
    next_page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_number') }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_number') }})
    playlists: Optional[list[shared_playlistsresponse_playlists.PlaylistsResponsePlaylists]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlists') }})
    previous_page_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_number') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
