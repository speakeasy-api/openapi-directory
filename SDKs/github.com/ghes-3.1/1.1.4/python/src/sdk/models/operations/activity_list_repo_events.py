import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListRepoEventsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListRepoEventsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListRepoEventsRequest:
    path_params: ActivityListRepoEventsPathParams = dataclasses.field()
    query_params: ActivityListRepoEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListRepoEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
