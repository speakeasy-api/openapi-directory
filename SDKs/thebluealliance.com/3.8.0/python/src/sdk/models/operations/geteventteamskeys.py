import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEventTeamsKeysPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventTeamsKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventTeamsKeysRequest:
    headers: GetEventTeamsKeysHeaders = dataclasses.field()
    path_params: GetEventTeamsKeysPathParams = dataclasses.field()
    security: GetEventTeamsKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventTeamsKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_event_teams_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
