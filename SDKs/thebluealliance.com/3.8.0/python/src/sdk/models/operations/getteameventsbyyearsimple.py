import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event_simple as shared_event_simple


@dataclasses.dataclass
class GetTeamEventsByYearSimplePathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventsByYearSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventsByYearSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventsByYearSimpleRequest:
    headers: GetTeamEventsByYearSimpleHeaders = dataclasses.field()
    path_params: GetTeamEventsByYearSimplePathParams = dataclasses.field()
    security: GetTeamEventsByYearSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventsByYearSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    event_simples: Optional[list[shared_event_simple.EventSimple]] = dataclasses.field(default=None)
    
