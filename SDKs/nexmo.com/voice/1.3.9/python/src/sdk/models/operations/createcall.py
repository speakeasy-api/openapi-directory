import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import createcallrequestncco as shared_createcallrequestncco
from ..shared import createcallrequestanswerurl as shared_createcallrequestanswerurl
from ..shared import createcallresponse as shared_createcallresponse


@dataclasses.dataclass
class CreateCallSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class CreateCallRequest:
    security: CreateCallSecurity = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCallResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_call_response: Optional[shared_createcallresponse.CreateCallResponse] = dataclasses.field(default=None)
    
