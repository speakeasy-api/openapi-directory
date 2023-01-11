import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetPathParams:
    aircraft_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aircraftCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetRequest:
    headers: ReferencesAircraftByAircraftCodeGetHeaders = dataclasses.field()
    path_params: ReferencesAircraftByAircraftCodeGetPathParams = dataclasses.field()
    query_params: ReferencesAircraftByAircraftCodeGetQueryParams = dataclasses.field()
    security: ReferencesAircraftByAircraftCodeGetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReferencesAircraftByAircraftCodeGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    references_aircraft_by_aircraft_code_get_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
