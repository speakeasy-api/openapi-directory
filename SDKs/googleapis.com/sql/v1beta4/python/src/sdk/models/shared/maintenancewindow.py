import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MaintenanceWindowUpdateTrackEnum(str, Enum):
    SQL_UPDATE_TRACK_UNSPECIFIED = "SQL_UPDATE_TRACK_UNSPECIFIED"
    CANARY = "canary"
    STABLE = "stable"


@dataclass_json
@dataclasses.dataclass
class MaintenanceWindow:
    r"""MaintenanceWindow
    Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
    """
    
    day: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    hour: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    update_track: Optional[MaintenanceWindowUpdateTrackEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTrack') }})
    
