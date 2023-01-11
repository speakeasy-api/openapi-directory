import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import found as shared_found


@dataclasses.dataclass
class GetResolveQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResolveSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclasses.dataclass
class GetResolveRequest:
    query_params: GetResolveQueryParams = dataclasses.field()
    security: GetResolveSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetResolveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    found: Optional[shared_found.Found] = dataclasses.field(default=None)
    
