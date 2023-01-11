import dataclasses
from typing import Optional
from ..shared import applicationeditrequest as shared_applicationeditrequest
from ..shared import groupapplicationresult as shared_groupapplicationresult


@dataclasses.dataclass
class EditGroupApplicationPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EditGroupApplicationRequest:
    path_params: EditGroupApplicationPathParams = dataclasses.field()
    request: shared_applicationeditrequest.ApplicationEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EditGroupApplicationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_application_result: Optional[shared_groupapplicationresult.GroupApplicationResult] = dataclasses.field(default=None)
    
