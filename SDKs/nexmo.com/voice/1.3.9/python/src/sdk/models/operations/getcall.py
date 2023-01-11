import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import getcallresponse as shared_getcallresponse


@dataclasses.dataclass
class GetCallPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCallSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetCallRequest:
    path_params: GetCallPathParams = dataclasses.field()
    security: GetCallSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_call_response: Optional[shared_getcallresponse.GetCallResponse] = dataclasses.field(default=None)
    
