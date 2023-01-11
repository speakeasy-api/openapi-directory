import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import optimizationactivity as shared_optimizationactivity

class CreativeOptimizationConfigurationOptimizationModelEnum(str, Enum):
    CLICK = "CLICK"
    POST_CLICK = "POST_CLICK"
    POST_IMPRESSION = "POST_IMPRESSION"
    POST_CLICK_AND_IMPRESSION = "POST_CLICK_AND_IMPRESSION"
    VIDEO_COMPLETION = "VIDEO_COMPLETION"


@dataclass_json
@dataclasses.dataclass
class CreativeOptimizationConfiguration:
    r"""CreativeOptimizationConfiguration
    Creative optimization settings.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    optimization_activitys: Optional[list[shared_optimizationactivity.OptimizationActivity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationActivitys') }})
    optimization_model: Optional[CreativeOptimizationConfigurationOptimizationModelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationModel') }})
    
