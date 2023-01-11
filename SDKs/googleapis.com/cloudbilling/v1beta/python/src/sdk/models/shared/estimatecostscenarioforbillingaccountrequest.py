import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costscenario as shared_costscenario


@dataclass_json
@dataclasses.dataclass
class EstimateCostScenarioForBillingAccountRequest:
    r"""EstimateCostScenarioForBillingAccountRequest
    Request for EstimateCostScenarioForBillingAccount.
    """
    
    cost_scenario: Optional[shared_costscenario.CostScenario] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costScenario') }})
    
