import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import externalurlobject as shared_externalurlobject
from ..shared import followersobject as shared_followersobject
from ..shared import imageobject as shared_imageobject


@dataclass_json
@dataclasses.dataclass
class ArtistObject:
    r"""ArtistObject

    https://developer.spotify.com/documentation/web-api/reference/#object-artistobject - Find more info on the official Spotify Web API Reference
    """
    
    external_urls: Optional[shared_externalurlobject.ExternalURLObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    followers: Optional[shared_followersobject.FollowersObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    genres: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genres') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[list[shared_imageobject.ImageObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    popularity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularity') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
