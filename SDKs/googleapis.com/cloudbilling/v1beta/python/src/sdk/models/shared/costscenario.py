import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import commitment as shared_commitment
from ..shared import scenarioconfig as shared_scenarioconfig
from ..shared import workload as shared_workload


@dataclass_json
@dataclasses.dataclass
class CostScenario:
    r"""CostScenario
    Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
    """
    
    commitments: Optional[list[shared_commitment.Commitment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitments') }})
    scenario_config: Optional[shared_scenarioconfig.ScenarioConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarioConfig') }})
    workloads: Optional[list[shared_workload.Workload]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloads') }})
    
