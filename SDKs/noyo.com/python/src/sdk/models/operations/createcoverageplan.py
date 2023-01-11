import dataclasses
from typing import Optional
from ..shared import coverageplancreaterequest as shared_coverageplancreaterequest
from ..shared import coverageplanresult as shared_coverageplanresult


@dataclasses.dataclass
class CreateCoveragePlanPathParams:
    group_coverage_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_coverage_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateCoveragePlanRequest:
    path_params: CreateCoveragePlanPathParams = dataclasses.field()
    request: shared_coverageplancreaterequest.CoveragePlanCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCoveragePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coverage_plan_result: Optional[shared_coverageplanresult.CoveragePlanResult] = dataclasses.field(default=None)
    
