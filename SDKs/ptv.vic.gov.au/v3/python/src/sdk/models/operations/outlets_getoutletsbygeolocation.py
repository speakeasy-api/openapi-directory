import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_outletgeolocationresponse as shared_v3_outletgeolocationresponse


@dataclasses.dataclass
class OutletsGetOutletsByGeolocationPathParams:
    latitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = dataclasses.field(metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OutletsGetOutletsByGeolocationQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OutletsGetOutletsByGeolocationRequest:
    path_params: OutletsGetOutletsByGeolocationPathParams = dataclasses.field()
    query_params: OutletsGetOutletsByGeolocationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OutletsGetOutletsByGeolocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_outlet_geolocation_response: Optional[shared_v3_outletgeolocationresponse.V3OutletGeolocationResponse] = dataclasses.field(default=None)
    
