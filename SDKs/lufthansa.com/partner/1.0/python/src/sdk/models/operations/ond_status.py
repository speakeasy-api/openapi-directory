import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OndStatusQueryParams:
    catalogues: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    new_routes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'new-routes', 'style': 'form', 'explode': True }})
    old_routes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'old-routes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OndStatusHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OndStatusSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OndStatusRequest:
    headers: OndStatusHeaders = dataclasses.field()
    query_params: OndStatusQueryParams = dataclasses.field()
    security: OndStatusSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OndStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    ond_status_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
