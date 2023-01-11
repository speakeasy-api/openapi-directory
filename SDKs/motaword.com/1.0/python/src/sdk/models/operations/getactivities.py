import dataclasses
from typing import Optional
from ..shared import activitylist as shared_activitylist
from ..shared import error as shared_error


@dataclasses.dataclass
class GetActivitiesPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivitiesQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActivitiesRequest:
    path_params: GetActivitiesPathParams = dataclasses.field()
    query_params: GetActivitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActivitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_list: Optional[shared_activitylist.ActivityList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
