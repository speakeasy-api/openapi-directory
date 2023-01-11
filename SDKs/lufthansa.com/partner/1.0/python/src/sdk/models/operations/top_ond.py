import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TopOndQueryParams:
    catalogues: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'origin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TopOndHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TopOndSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class TopOndRequest:
    headers: TopOndHeaders = dataclasses.field()
    query_params: TopOndQueryParams = dataclasses.field()
    security: TopOndSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TopOndResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    top_ond_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
