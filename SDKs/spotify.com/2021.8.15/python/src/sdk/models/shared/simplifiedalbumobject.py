import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import simplifiedartistobject as shared_simplifiedartistobject
from ..shared import externalurlobject as shared_externalurlobject
from ..shared import imageobject as shared_imageobject
from ..shared import albumrestrictionobject as shared_albumrestrictionobject


@dataclass_json
@dataclasses.dataclass
class SimplifiedAlbumObject:
    r"""SimplifiedAlbumObject

    https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
    """
    
    album_group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_group') }})
    album_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album_type') }})
    artists: Optional[list[shared_simplifiedartistobject.SimplifiedArtistObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    available_markets: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_markets') }})
    external_urls: Optional[shared_externalurlobject.ExternalURLObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_urls') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[list[shared_imageobject.ImageObject]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date') }})
    release_date_precision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('release_date_precision') }})
    restrictions: Optional[shared_albumrestrictionobject.AlbumRestrictionObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    total_tracks: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tracks') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
