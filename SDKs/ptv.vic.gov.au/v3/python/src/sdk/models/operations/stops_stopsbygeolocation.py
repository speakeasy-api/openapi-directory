import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_stopsbydistanceresponse as shared_v3_stopsbydistanceresponse


@dataclasses.dataclass
class StopsStopsByGeolocationPathParams:
    latitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopsStopsByGeolocationQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    route_types: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StopsStopsByGeolocationRequest:
    path_params: StopsStopsByGeolocationPathParams = dataclasses.field()
    query_params: StopsStopsByGeolocationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StopsStopsByGeolocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_stops_by_distance_response: Optional[shared_v3_stopsbydistanceresponse.V3StopsByDistanceResponse] = dataclasses.field(default=None)
    
