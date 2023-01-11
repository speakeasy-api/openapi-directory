import dataclasses
from typing import Optional
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclasses.dataclass
class GetGroupApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupApplicationRequest:
    path_params: GetGroupApplicationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_application_result: Optional[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(default=None)
    
