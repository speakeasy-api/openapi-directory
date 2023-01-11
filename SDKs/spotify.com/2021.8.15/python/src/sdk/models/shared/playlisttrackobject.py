import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicuserobject as shared_publicuserobject
from ..shared import trackobject as shared_trackobject
from ..shared import episodeobject as shared_episodeobject


@dataclass_json
@dataclasses.dataclass
class PlaylistTrackObject:
    r"""PlaylistTrackObject

    https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
    """
    
    added_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    added_by: Optional[shared_publicuserobject.PublicUserObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_by') }})
    is_local: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_local') }})
    track: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
