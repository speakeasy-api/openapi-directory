import dataclasses
from typing import Optional
from ..shared import v3_errorresponse as shared_v3_errorresponse
from ..shared import v3_stopresponse as shared_v3_stopresponse


@dataclasses.dataclass
class StopsStopDetailsPathParams:
    route_type: int = dataclasses.field(metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    stop_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'stop_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopsStopDetailsQueryParams:
    devid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    gtfs: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gtfs', 'style': 'form', 'explode': True }})
    signature: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_accessibility: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_accessibility', 'style': 'form', 'explode': True }})
    stop_amenities: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_amenities', 'style': 'form', 'explode': True }})
    stop_contact: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_contact', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    stop_location: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_location', 'style': 'form', 'explode': True }})
    stop_staffing: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_staffing', 'style': 'form', 'explode': True }})
    stop_ticket: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'stop_ticket', 'style': 'form', 'explode': True }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StopsStopDetailsRequest:
    path_params: StopsStopDetailsPathParams = dataclasses.field()
    query_params: StopsStopDetailsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StopsStopDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    v3_error_response: Optional[shared_v3_errorresponse.V3ErrorResponse] = dataclasses.field(default=None)
    v3_stop_response: Optional[shared_v3_stopresponse.V3StopResponse] = dataclasses.field(default=None)
    
