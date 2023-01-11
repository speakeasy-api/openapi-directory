import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScenarioConfig:
    r"""ScenarioConfig
    Configuration for a CostScenario. Specifies how costs are calculated.
    """
    
    estimate_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimateDuration') }})
    
