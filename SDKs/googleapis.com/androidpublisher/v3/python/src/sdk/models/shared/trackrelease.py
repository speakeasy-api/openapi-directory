import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import countrytargeting as shared_countrytargeting
from ..shared import localizedtext as shared_localizedtext

class TrackReleaseStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "statusUnspecified"
    DRAFT = "draft"
    IN_PROGRESS = "inProgress"
    HALTED = "halted"
    COMPLETED = "completed"


@dataclass_json
@dataclasses.dataclass
class TrackRelease:
    r"""TrackRelease
    A release within a track.
    """
    
    country_targeting: Optional[shared_countrytargeting.CountryTargeting] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryTargeting') }})
    in_app_update_priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inAppUpdatePriority') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_notes: Optional[list[shared_localizedtext.LocalizedText]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseNotes') }})
    status: Optional[TrackReleaseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_fraction: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFraction') }})
    version_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCodes') }})
    
