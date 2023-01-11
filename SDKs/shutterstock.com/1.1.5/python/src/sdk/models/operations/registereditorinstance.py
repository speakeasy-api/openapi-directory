import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import registervideoeditorrequest as shared_registervideoeditorrequest


@dataclasses.dataclass
class RegisterEditorInstanceSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RegisterEditorInstanceRequest:
    security: RegisterEditorInstanceSecurity = dataclasses.field()
    request: Optional[shared_registervideoeditorrequest.RegisterVideoEditorRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterEditorInstanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
