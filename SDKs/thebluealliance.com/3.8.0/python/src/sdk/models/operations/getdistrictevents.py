import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import event as shared_event


@dataclasses.dataclass
class GetDistrictEventsPathParams:
    district_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'district_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictEventsHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDistrictEventsSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetDistrictEventsRequest:
    headers: GetDistrictEventsHeaders = dataclasses.field()
    path_params: GetDistrictEventsPathParams = dataclasses.field()
    security: GetDistrictEventsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetDistrictEventsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    events: Optional[list[shared_event.Event]] = dataclasses.field(default=None)
    
