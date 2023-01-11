import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse


@dataclasses.dataclass
class FareEstimateGetFareEstimateByZonePathParams:
    max_zone: int = dataclasses.field(metadata={'path_param': { 'field_name': 'maxZone', 'style': 'simple', 'explode': False }})
    min_zone: int = dataclasses.field(metadata={'path_param': { 'field_name': 'minZone', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FareEstimateGetFareEstimateByZoneQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    is_journey_in_free_tram_zone: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_journey_in_free_tram_zone', 'style': 'form', 'explode': True }})
    journey_touch_off_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'journey_touch_off_utc', 'style': 'form', 'explode': True }})
    journey_touch_on_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'journey_touch_on_utc', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    travelled_route_types: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'travelled_route_types', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FareEstimateGetFareEstimateByZoneRequest:
    path_params: FareEstimateGetFareEstimateByZonePathParams = dataclasses.field()
    query_params: FareEstimateGetFareEstimateByZoneQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class FareEstimateGetFareEstimateByZoneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_fare_estimate_response: Optional[Any] = dataclasses.field(default=None)
    
