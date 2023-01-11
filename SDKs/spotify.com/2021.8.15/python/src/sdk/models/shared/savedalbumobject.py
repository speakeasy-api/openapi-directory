import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import albumobject as shared_albumobject


@dataclass_json
@dataclasses.dataclass
class SavedAlbumObject:
    r"""SavedAlbumObject

    https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
    """
    
    added_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    album: Optional[shared_albumobject.AlbumObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    
