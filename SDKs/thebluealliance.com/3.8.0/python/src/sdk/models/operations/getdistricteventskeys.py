import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetDistrictEventsKeysPathParams:
    district_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictEventsKeysHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictEventsKeysSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistrictEventsKeysRequest:
    headers: GetDistrictEventsKeysHeaders = dataclasses.field()
    path_params: GetDistrictEventsKeysPathParams = dataclasses.field()
    security: GetDistrictEventsKeysSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictEventsKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_district_events_keys_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
