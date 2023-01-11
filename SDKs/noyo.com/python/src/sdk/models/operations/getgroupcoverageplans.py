import dataclasses
from typing import Optional
from ..shared import paginatedcoverageplanresult as shared_paginatedcoverageplanresult


@dataclasses.dataclass
class GetGroupCoveragePlansPathParams:
    group_coverage_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_coverage_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupCoveragePlansRequest:
    path_params: GetGroupCoveragePlansPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupCoveragePlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paginated_coverage_plan_result: Optional[shared_paginatedcoverageplanresult.PaginatedCoveragePlanResult] = dataclasses.field(default=None)
    
