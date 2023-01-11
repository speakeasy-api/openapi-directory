import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplifiedalbumobject as shared_simplifiedalbumobject
from ..shared import artistobject as shared_artistobject
from ..shared import externalidobject as shared_externalidobject
from ..shared import externalurlobject as shared_externalurlobject
from ..shared import linkedtrackobject as shared_linkedtrackobject
from ..shared import trackrestrictionobject as shared_trackrestrictionobject


@dataclass_json
@dataclasses.dataclass
class TrackObject:
    r"""TrackObject

    https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
    """
    
    album: Optional[shared_simplifiedalbumobject.SimplifiedAlbumObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    artists: Optional[list[shared_artistobject.ArtistObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    available_markets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    disc_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disc_number') }})
    duration_ms: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    explicit: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicit') }})
    external_ids: Optional[shared_externalidobject.ExternalIDObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_ids') }})
    external_urls: Optional[shared_externalurlobject.ExternalURLObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_local: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_local') }})
    is_playable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_playable') }})
    linked_from: Optional[shared_linkedtrackobject.LinkedTrackObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linked_from') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    popularity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('popularity') }})
    preview_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_url') }})
    restrictions: Optional[shared_trackrestrictionobject.TrackRestrictionObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    track_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track_number') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
