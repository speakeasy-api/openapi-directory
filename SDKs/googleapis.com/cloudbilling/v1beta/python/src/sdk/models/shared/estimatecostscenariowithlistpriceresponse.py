import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import costestimationresult as shared_costestimationresult


@dataclass_json
@dataclasses.dataclass
class EstimateCostScenarioWithListPriceResponse:
    r"""EstimateCostScenarioWithListPriceResponse
    Response for EstimateCostScenarioWithListPrice
    """
    
    cost_estimation_result: Optional[shared_costestimationresult.CostEstimationResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costEstimationResult') }})
    
