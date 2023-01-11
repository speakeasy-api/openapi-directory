import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamEventMatchesKeysPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    team_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventMatchesKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamEventMatchesKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamEventMatchesKeysRequest:
    headers: GetTeamEventMatchesKeysHeaders = dataclasses.field()
    path_params: GetTeamEventMatchesKeysPathParams = dataclasses.field()
    security: GetTeamEventMatchesKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamEventMatchesKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_team_event_matches_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
