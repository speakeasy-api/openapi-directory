import dataclasses
from typing import Optional
from ..shared import activity as shared_activity
from ..shared import error as shared_error


@dataclasses.dataclass
class GetActivityPathParams:
    activity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'activityId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivityRequest:
    path_params: GetActivityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity: Optional[shared_activity.Activity] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
