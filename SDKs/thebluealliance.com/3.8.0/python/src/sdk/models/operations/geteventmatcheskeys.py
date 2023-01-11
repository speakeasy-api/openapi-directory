import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEventMatchesKeysPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventMatchesKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventMatchesKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventMatchesKeysRequest:
    headers: GetEventMatchesKeysHeaders = dataclasses.field()
    path_params: GetEventMatchesKeysPathParams = dataclasses.field()
    security: GetEventMatchesKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventMatchesKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_event_matches_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
