import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FeatureSettings:
    r"""FeatureSettings
    The feature specific settings to be used in the application. These define behaviors that are user configurable.
    """
    
    split_health_checks: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitHealthChecks') }})
    use_container_optimized_os: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useContainerOptimizedOs') }})
    
