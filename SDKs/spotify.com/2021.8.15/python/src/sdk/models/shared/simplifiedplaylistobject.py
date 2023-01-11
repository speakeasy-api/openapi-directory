import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import externalurlobject as shared_externalurlobject
from ..shared import imageobject as shared_imageobject
from ..shared import publicuserobject as shared_publicuserobject
from ..shared import playlisttracksrefobject as shared_playlisttracksrefobject


@dataclass_json
@dataclasses.dataclass
class SimplifiedPlaylistObject:
    r"""SimplifiedPlaylistObject

    https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject - Find more info on the official Spotify Web API Reference
    """
    
    collaborative: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborative') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_urls: Optional[shared_externalurlobject.ExternalURLObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[list[shared_imageobject.ImageObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[shared_publicuserobject.PublicUserObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    public: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    snapshot_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_id') }})
    tracks: Optional[shared_playlisttracksrefobject.PlaylistTracksRefObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
