import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_stopsonrouteresponse as shared_v3_stopsonrouteresponse


@dataclasses.dataclass
class StopsStopsForRoutePathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopsStopsForRouteQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    direction_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction_id', 'style': 'form', 'explode': True }})
    geopath_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geopath_utc', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StopsStopsForRouteRequest:
    path_params: StopsStopsForRoutePathParams = dataclasses.field()
    query_params: StopsStopsForRouteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StopsStopsForRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_stops_on_route_response: Optional[shared_v3_stopsonrouteresponse.V3StopsOnRouteResponse] = dataclasses.field(default=None)
    
