import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cursorobject as shared_cursorobject
from ..shared import artistobject as shared_artistobject


@dataclass_json
@dataclasses.dataclass
class FollowingArtistsObjectArtists:
    r"""FollowingArtistsObjectArtists

    https://developer.spotify.com/documentation/web-api/reference/#object-cursorpagingobject - Find more info on the official Spotify Web API Reference
    """
    
    cursors: Optional[shared_cursorobject.CursorObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursors') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[list[shared_artistobject.ArtistObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class FollowingArtistsObject:
    artists: Optional[FollowingArtistsObjectArtists] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    
