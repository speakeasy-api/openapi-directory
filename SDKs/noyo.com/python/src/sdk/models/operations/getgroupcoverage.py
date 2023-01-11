import dataclasses
from typing import Optional
from ..shared import groupcoverageresult as shared_groupcoverageresult


@dataclasses.dataclass
class GetGroupCoveragePathParams:
    group_coverage_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_coverage_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupCoverageRequest:
    path_params: GetGroupCoveragePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupCoverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_coverage_result: Optional[shared_groupcoverageresult.GroupCoverageResult] = dataclasses.field(default=None)
    
