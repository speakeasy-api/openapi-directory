import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetPathParams:
    airline_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'airlineCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetRequest:
    headers: ReferencesAirlinesByAirlineCodeGetHeaders = dataclasses.field()
    path_params: ReferencesAirlinesByAirlineCodeGetPathParams = dataclasses.field()
    query_params: ReferencesAirlinesByAirlineCodeGetQueryParams = dataclasses.field()
    security: ReferencesAirlinesByAirlineCodeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesAirlinesByAirlineCodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    references_airlines_by_airline_code_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
