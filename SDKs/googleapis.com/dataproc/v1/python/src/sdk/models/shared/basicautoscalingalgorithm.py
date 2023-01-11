import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sparkstandaloneautoscalingconfig as shared_sparkstandaloneautoscalingconfig
from ..shared import basicyarnautoscalingconfig as shared_basicyarnautoscalingconfig


@dataclass_json
@dataclasses.dataclass
class BasicAutoscalingAlgorithm:
    r"""BasicAutoscalingAlgorithm
    Basic algorithm for autoscaling.
    """
    
    cooldown_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cooldownPeriod') }})
    spark_standalone_config: Optional[shared_sparkstandaloneautoscalingconfig.SparkStandaloneAutoscalingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkStandaloneConfig') }})
    yarn_config: Optional[shared_basicyarnautoscalingconfig.BasicYarnAutoscalingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yarnConfig') }})
    
