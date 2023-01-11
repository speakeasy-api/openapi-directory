import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTeamsKeysPathParams:
    page_num: int = dataclasses.field(metadata={'path_param': { 'field_name': 'page_num', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTeamsKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTeamsKeysRequest:
    headers: GetTeamsKeysHeaders = dataclasses.field()
    path_params: GetTeamsKeysPathParams = dataclasses.field()
    security: GetTeamsKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTeamsKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_teams_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
