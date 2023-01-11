import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRunV2TrafficTargetTypeEnum(str, Enum):
    TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED = "TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED"
    TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION = "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRunV2TrafficTarget:
    r"""GoogleCloudRunV2TrafficTarget
    Holds a single traffic routing entry for the Service. Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision.
    """
    
    percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    revision: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    type: Optional[GoogleCloudRunV2TrafficTargetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
