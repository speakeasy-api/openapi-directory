import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event as shared_event


@dataclasses.dataclass
class GetEventsByYearPathParams:
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventsByYearRequest:
    headers: GetEventsByYearHeaders = dataclasses.field()
    path_params: GetEventsByYearPathParams = dataclasses.field()
    security: GetEventsByYearSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsByYearResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
