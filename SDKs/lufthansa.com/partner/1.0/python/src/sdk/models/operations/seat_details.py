import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class SeatDetailsPathParams:
    aircraft_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    cabin_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cabinCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeatDetailsQueryParams:
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SeatDetailsHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SeatDetailsSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SeatDetailsRequest:
    headers: SeatDetailsHeaders = dataclasses.field()
    path_params: SeatDetailsPathParams = dataclasses.field()
    query_params: SeatDetailsQueryParams = dataclasses.field()
    security: SeatDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SeatDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    seat_details_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
