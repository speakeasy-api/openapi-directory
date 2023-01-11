import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import match_simple as shared_match_simple


@dataclasses.dataclass
class GetTeamMatchesByYearSimplePathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearSimpleHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearSimpleSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearSimpleRequest:
    headers: GetTeamMatchesByYearSimpleHeaders = dataclasses.field()
    path_params: GetTeamMatchesByYearSimplePathParams = dataclasses.field()
    security: GetTeamMatchesByYearSimpleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMatchesByYearSimpleResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    match_simples: Optional[list[shared_match_simple.MatchSimple]] = dataclasses.field(default=None)
    
