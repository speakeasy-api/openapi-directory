import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetEventMatchTimeseriesPathParams:
    event_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventMatchTimeseriesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetEventMatchTimeseriesRequest:
    headers: GetEventMatchTimeseriesHeaders = dataclasses.field()
    path_params: GetEventMatchTimeseriesPathParams = dataclasses.field()
    security: GetEventMatchTimeseriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventMatchTimeseriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_event_match_timeseries_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
