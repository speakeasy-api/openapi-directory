import dataclasses
from typing import Optional
from ..shared import coverageplaneditrequest as shared_coverageplaneditrequest
from ..shared import coverageplanresult as shared_coverageplanresult


@dataclasses.dataclass
class EditCoveragePlanPathParams:
    plan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'plan_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditCoveragePlanRequest:
    path_params: EditCoveragePlanPathParams = dataclasses.field()
    request: shared_coverageplaneditrequest.CoveragePlanEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditCoveragePlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coverage_plan_result: Optional[shared_coverageplanresult.CoveragePlanResult] = dataclasses.field(default=None)
    
