import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativeassignment as shared_creativeassignment

class CreativeRotationTypeEnum(str, Enum):
    CREATIVE_ROTATION_TYPE_SEQUENTIAL = "CREATIVE_ROTATION_TYPE_SEQUENTIAL"
    CREATIVE_ROTATION_TYPE_RANDOM = "CREATIVE_ROTATION_TYPE_RANDOM"

class CreativeRotationWeightCalculationStrategyEnum(str, Enum):
    WEIGHT_STRATEGY_EQUAL = "WEIGHT_STRATEGY_EQUAL"
    WEIGHT_STRATEGY_CUSTOM = "WEIGHT_STRATEGY_CUSTOM"
    WEIGHT_STRATEGY_HIGHEST_CTR = "WEIGHT_STRATEGY_HIGHEST_CTR"
    WEIGHT_STRATEGY_OPTIMIZED = "WEIGHT_STRATEGY_OPTIMIZED"


@dataclass_json
@dataclasses.dataclass
class CreativeRotation:
    r"""CreativeRotation
    Creative Rotation.
    """
    
    creative_assignments: Optional[list[shared_creativeassignment.CreativeAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeAssignments') }})
    creative_optimization_configuration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeOptimizationConfigurationId') }})
    type: Optional[CreativeRotationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    weight_calculation_strategy: Optional[CreativeRotationWeightCalculationStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightCalculationStrategy') }})
    
