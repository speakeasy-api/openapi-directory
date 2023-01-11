import dataclasses
from typing import Optional
from ..shared import coverageplanresult as shared_coverageplanresult


@dataclasses.dataclass
class GetCoveragePlanPathParams:
    plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCoveragePlanRequest:
    path_params: GetCoveragePlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCoveragePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coverage_plan_result: Optional[shared_coverageplanresult.CoveragePlanResult] = dataclasses.field(default=None)
    
