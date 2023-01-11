import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRunV2TrafficTargetStatusTypeEnum(str, Enum):
    TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2TrafficTargetStatus:
    r"""GoogleCloudRunV2TrafficTargetStatus
    Represents the observed state of a single `TrafficTarget` entry.
    """
    
    percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    type: Optional[GoogleCloudRunV2TrafficTargetStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
