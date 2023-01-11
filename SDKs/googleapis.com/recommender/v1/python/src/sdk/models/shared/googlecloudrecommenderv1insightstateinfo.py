import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecommenderV1InsightStateInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ACCEPTED = "ACCEPTED"
    DISMISSED = "DISMISSED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1InsightStateInfo:
    r"""GoogleCloudRecommenderV1InsightStateInfo
    Information related to insight state.
    """
    
    state: Optional[GoogleCloudRecommenderV1InsightStateInfoStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_metadata: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMetadata') }})
    
