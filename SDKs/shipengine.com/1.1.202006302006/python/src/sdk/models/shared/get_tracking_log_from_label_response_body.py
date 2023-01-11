import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import track_event as shared_track_event


@dataclass_json
@dataclasses.dataclass
class GetTrackingLogFromLabelResponseBody:
    r"""GetTrackingLogFromLabelResponseBody
    A tracking information resource
    """
    
    carrier_status_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_status_code') }})
    estimated_delivery_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimated_delivery_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: list[shared_track_event.TrackEvent] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    status_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    tracking_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_number') }})
    actual_delivery_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_delivery_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    carrier_status_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier_status_description') }})
    exception_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exception_description') }})
    ship_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ship_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_description') }})
    
