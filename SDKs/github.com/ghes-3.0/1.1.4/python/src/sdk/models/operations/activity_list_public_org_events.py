import dataclasses
from typing import Optional
from ..shared import event as shared_event


@dataclasses.dataclass
class ActivityListPublicOrgEventsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ActivityListPublicOrgEventsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListPublicOrgEventsRequest:
    path_params: ActivityListPublicOrgEventsPathParams = dataclasses.field()
    query_params: ActivityListPublicOrgEventsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListPublicOrgEventsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
