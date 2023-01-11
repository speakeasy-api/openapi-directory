import dataclasses
from typing import Optional
from ..shared import groupcoveragecreaterequest as shared_groupcoveragecreaterequest
from ..shared import groupcoverageresult as shared_groupcoverageresult


@dataclasses.dataclass
class CreateGroupCoveragePathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGroupCoverageRequest:
    path_params: CreateGroupCoveragePathParams = dataclasses.field()
    request: shared_groupcoveragecreaterequest.GroupCoverageCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupCoverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_coverage_result: Optional[shared_groupcoverageresult.GroupCoverageResult] = dataclasses.field(default=None)
    
