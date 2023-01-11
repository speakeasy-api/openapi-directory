import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamMatchesByYearKeysPathParams:
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamMatchesByYearKeysRequest:
    headers: GetTeamMatchesByYearKeysHeaders = dataclasses.field()
    path_params: GetTeamMatchesByYearKeysPathParams = dataclasses.field()
    security: GetTeamMatchesByYearKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamMatchesByYearKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_team_matches_by_year_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
