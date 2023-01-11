import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import airportresponse as shared_airportresponse


@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetPathParams:
    airport_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'airportCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetQueryParams:
    l_hoperated: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LHoperated', 'style': 'form', 'explode': True }})
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetRequest:
    headers: ReferencesAirportsByAirportCodeGetHeaders = dataclasses.field()
    path_params: ReferencesAirportsByAirportCodeGetPathParams = dataclasses.field()
    query_params: ReferencesAirportsByAirportCodeGetQueryParams = dataclasses.field()
    security: ReferencesAirportsByAirportCodeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesAirportsByAirportCodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    airport_response: Optional[shared_airportresponse.AirportResponse] = dataclasses.field(default=None)
    
