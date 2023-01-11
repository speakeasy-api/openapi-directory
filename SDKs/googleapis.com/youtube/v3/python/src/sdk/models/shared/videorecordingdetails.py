import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geopoint as shared_geopoint


@dataclass_json
@dataclasses.dataclass
class VideoRecordingDetails:
    r"""VideoRecordingDetails
    Recording information associated with the video.
    """
    
    location: Optional[shared_geopoint.GeoPoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationDescription') }})
    recording_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordingDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
