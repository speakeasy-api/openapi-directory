import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEventsByYearKeysPathParams:
    year: int = dataclasses.field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventsByYearKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventsByYearKeysRequest:
    headers: GetEventsByYearKeysHeaders = dataclasses.field()
    path_params: GetEventsByYearKeysPathParams = dataclasses.field()
    security: GetEventsByYearKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsByYearKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_events_by_year_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
