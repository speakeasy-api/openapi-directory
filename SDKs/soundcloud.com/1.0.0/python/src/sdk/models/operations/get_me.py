import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import completeuser as shared_completeuser
from ..shared import error as shared_error


@dataclasses.dataclass
class GetMeSecurity:
    auth_header: shared_security.SchemeAuthHeader = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetMeRequest:
    security: GetMeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_user: Optional[shared_completeuser.CompleteUser] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
