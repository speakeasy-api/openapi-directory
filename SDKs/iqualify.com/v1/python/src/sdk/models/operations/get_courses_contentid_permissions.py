import dataclasses
from typing import Any,Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetCoursesContentIDPermissionsPathParams:
    content_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCoursesContentIDPermissionsRequest:
    path_params: GetCoursesContentIDPermissionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCoursesContentIDPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    user_permission: Optional[Any] = dataclasses.field(default=None)
    
