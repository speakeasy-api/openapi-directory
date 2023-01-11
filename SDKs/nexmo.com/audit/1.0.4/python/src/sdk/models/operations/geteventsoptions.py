import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import auditeventtypesresp as shared_auditeventtypesresp
from ..shared import errorforbidden as shared_errorforbidden
from ..shared import errorunauthorized as shared_errorunauthorized
from ..shared import nocontent as shared_nocontent


@dataclasses.dataclass
class GetEventsOptionsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetEventsOptionsRequest:
    security: GetEventsOptionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetEventsOptionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audit_event_types_resp: Optional[shared_auditeventtypesresp.AuditEventTypesResp] = dataclasses.field(default=None)
    error_forbidden: Optional[shared_errorforbidden.ErrorForbidden] = dataclasses.field(default=None)
    error_unauthorized: Optional[shared_errorunauthorized.ErrorUnauthorized] = dataclasses.field(default=None)
    no_content: Optional[shared_nocontent.NoContent] = dataclasses.field(default=None)
    
