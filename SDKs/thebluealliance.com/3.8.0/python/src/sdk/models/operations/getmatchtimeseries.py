import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetMatchTimeseriesPathParams:
    match_key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'match_key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchTimeseriesHeaders:
    if_modified_since: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMatchTimeseriesSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMatchTimeseriesRequest:
    headers: GetMatchTimeseriesHeaders = dataclasses.field()
    path_params: GetMatchTimeseriesPathParams = dataclasses.field()
    security: GetMatchTimeseriesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMatchTimeseriesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_match_timeseries_200_application_json_objects: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
