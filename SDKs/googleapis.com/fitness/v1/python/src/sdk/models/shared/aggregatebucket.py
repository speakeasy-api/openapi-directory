import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dataset as shared_dataset
from ..shared import session as shared_session

class AggregateBucketTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    TIME = "time"
    SESSION = "session"
    ACTIVITY_TYPE = "activityType"
    ACTIVITY_SEGMENT = "activitySegment"


@dataclass_json
@dataclasses.dataclass
class AggregateBucket:
    activity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    dataset: Optional[list[shared_dataset.Dataset]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    end_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeMillis') }})
    session: Optional[shared_session.Session] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    start_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMillis') }})
    type: Optional[AggregateBucketTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
