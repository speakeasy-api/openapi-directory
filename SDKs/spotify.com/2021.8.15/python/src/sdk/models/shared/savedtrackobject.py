import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trackobject as shared_trackobject


@dataclass_json
@dataclasses.dataclass
class SavedTrackObject:
    r"""SavedTrackObject

    https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject - Find more info on the official Spotify Web API Reference
    """
    
    added_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    track: Optional[shared_trackobject.TrackObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
