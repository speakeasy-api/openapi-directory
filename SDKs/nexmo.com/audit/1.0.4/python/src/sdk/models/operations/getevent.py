import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import auditevent as shared_auditevent
from ..shared import errornotfound as shared_errornotfound
from ..shared import errorunauthorized as shared_errorunauthorized


@dataclasses.dataclass
class GetEventPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEventSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetEventRequest:
    path_params: GetEventPathParams = dataclasses.field()
    security: GetEventSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_event: Optional[shared_auditevent.AuditEvent] = dataclasses.field(default=None)
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    error_unauthorized: Optional[shared_errorunauthorized.ErrorUnauthorized] = dataclasses.field(default=None)
    
