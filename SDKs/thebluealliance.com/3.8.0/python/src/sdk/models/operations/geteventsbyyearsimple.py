import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event_simple as shared_event_simple


@dataclasses.dataclass
class GetEventsByYearSimplePathParams:
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventsByYearSimpleRequest:
    headers: GetEventsByYearSimpleHeaders = dataclasses.field()
    path_params: GetEventsByYearSimplePathParams = dataclasses.field()
    security: GetEventsByYearSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsByYearSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_simples: Optional[list[shared_event_simple.EventSimple]] = dataclasses.field(default=None)
    
