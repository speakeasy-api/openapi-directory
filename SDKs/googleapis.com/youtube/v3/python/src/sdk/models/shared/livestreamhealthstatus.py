import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import livestreamconfigurationissue as shared_livestreamconfigurationissue

class LiveStreamHealthStatusStatusEnum(str, Enum):
    GOOD = "good"
    OK = "ok"
    BAD = "bad"
    NO_DATA = "noData"
    REVOKED = "revoked"


@dataclass_json
@dataclasses.dataclass
class LiveStreamHealthStatus:
    configuration_issues: Optional[list[shared_livestreamconfigurationissue.LiveStreamConfigurationIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationIssues') }})
    last_update_time_seconds: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTimeSeconds') }})
    status: Optional[LiveStreamHealthStatusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
