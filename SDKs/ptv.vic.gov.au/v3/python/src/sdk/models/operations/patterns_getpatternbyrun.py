import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_stoppingpattern as shared_v3_stoppingpattern


@dataclasses.dataclass
class PatternsGetPatternByRunPathParams:
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    run_ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'run_ref', 'style': 'simple', 'explode': False }})
    
class PatternsGetPatternByRunExpandEnum(str, Enum):
    ALL = "All"
    STOP = "Stop"
    ROUTE = "Route"
    RUN = "Run"
    DIRECTION = "Direction"
    DISRUPTION = "Disruption"
    VEHICLE_DESCRIPTOR = "VehicleDescriptor"
    VEHICLE_POSITION = "VehiclePosition"
    NONE = "None"


@dataclasses.dataclass
class PatternsGetPatternByRunQueryParams:
    expand: list[PatternsGetPatternByRunExpandEnum] = dataclasses.field(metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    date_utc: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_utc', 'style': 'form', 'explode': True }})
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    include_skipped_stops: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_skipped_stops', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_id', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatternsGetPatternByRunRequest:
    path_params: PatternsGetPatternByRunPathParams = dataclasses.field()
    query_params: PatternsGetPatternByRunQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PatternsGetPatternByRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_stopping_pattern: Optional[shared_v3_stoppingpattern.V3StoppingPattern] = dataclasses.field(default=None)
    
