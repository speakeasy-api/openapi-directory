import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OsBrowsersQueryParams:
    os: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OsBrowsersSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class OsBrowsersRequest:
    query_params: OsBrowsersQueryParams = dataclasses.field()
    security: OsBrowsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OsBrowsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    os_browsers: Optional[Any] = dataclasses.field(default=None)
    
