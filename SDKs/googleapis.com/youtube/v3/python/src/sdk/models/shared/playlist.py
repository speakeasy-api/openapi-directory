import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playlistcontentdetails as shared_playlistcontentdetails
from ..shared import playlistlocalization as shared_playlistlocalization
from ..shared import playlistplayer as shared_playlistplayer
from ..shared import playlistsnippet as shared_playlistsnippet
from ..shared import playliststatus as shared_playliststatus


@dataclass_json
@dataclasses.dataclass
class Playlist:
    r"""Playlist
    A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
    """
    
    content_details: Optional[shared_playlistcontentdetails.PlaylistContentDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localizations: Optional[dict[str, shared_playlistlocalization.PlaylistLocalization]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    player: Optional[shared_playlistplayer.PlaylistPlayer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    snippet: Optional[shared_playlistsnippet.PlaylistSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    status: Optional[shared_playliststatus.PlaylistStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
