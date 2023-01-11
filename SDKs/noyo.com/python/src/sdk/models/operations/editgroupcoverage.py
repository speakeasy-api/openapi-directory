import dataclasses
from typing import Optional
from ..shared import groupcoverageeditrequest as shared_groupcoverageeditrequest
from ..shared import groupcoverageresult as shared_groupcoverageresult


@dataclasses.dataclass
class EditGroupCoveragePathParams:
    group_coverage_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_coverage_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditGroupCoverageRequest:
    path_params: EditGroupCoveragePathParams = dataclasses.field()
    request: shared_groupcoverageeditrequest.GroupCoverageEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditGroupCoverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_coverage_result: Optional[shared_groupcoverageresult.GroupCoverageResult] = dataclasses.field(default=None)
    
