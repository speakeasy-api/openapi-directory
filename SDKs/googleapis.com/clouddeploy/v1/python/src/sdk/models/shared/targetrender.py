import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TargetRenderFailureCauseEnum(str, Enum):
    FAILURE_CAUSE_UNSPECIFIED = "FAILURE_CAUSE_UNSPECIFIED"
    CLOUD_BUILD_UNAVAILABLE = "CLOUD_BUILD_UNAVAILABLE"
    EXECUTION_FAILED = "EXECUTION_FAILED"

class TargetRenderRenderingStateEnum(str, Enum):
    TARGET_RENDER_STATE_UNSPECIFIED = "TARGET_RENDER_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"


@dataclass_json
@dataclasses.dataclass
class TargetRender:
    failure_cause: Optional[TargetRenderFailureCauseEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCause') }})
    failure_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureMessage') }})
    rendering_build: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingBuild') }})
    rendering_state: Optional[TargetRenderRenderingStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('renderingState') }})
    
