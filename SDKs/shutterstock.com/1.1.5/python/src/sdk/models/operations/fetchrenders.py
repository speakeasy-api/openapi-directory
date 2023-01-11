import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class FetchRendersQueryParams:
    id: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchRendersSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class FetchRendersRequest:
    query_params: FetchRendersQueryParams = dataclasses.field()
    security: FetchRendersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class FetchRendersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_renders_list_results: Optional[Any] = dataclasses.field(default=None)
    
