import dataclasses
from typing import Optional
from ..shared import applicationcreaterequest as shared_applicationcreaterequest
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclasses.dataclass
class CreateGroupApplicationPathParams:
    group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGroupApplicationRequest:
    path_params: CreateGroupApplicationPathParams = dataclasses.field()
    request: shared_applicationcreaterequest.ApplicationCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_application_result: Optional[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(default=None)
    
