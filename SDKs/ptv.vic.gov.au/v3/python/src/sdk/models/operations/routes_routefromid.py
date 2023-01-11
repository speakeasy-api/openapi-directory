import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_routeresponse as shared_v3_routeresponse


@dataclasses.dataclass
class RoutesRouteFromIDPathParams:
    route_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RoutesRouteFromIDQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    geopath_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'geopath_utc', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RoutesRouteFromIDRequest:
    path_params: RoutesRouteFromIDPathParams = dataclasses.field()
    query_params: RoutesRouteFromIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RoutesRouteFromIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_route_response: Optional[shared_v3_routeresponse.V3RouteResponse] = dataclasses.field(default=None)
    
