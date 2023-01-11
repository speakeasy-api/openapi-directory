import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import videoeditortokenrequest as shared_videoeditortokenrequest
from ..shared import videoeditortokenresponse as shared_videoeditortokenresponse


@dataclasses.dataclass
class AuthVideoEditorSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class AuthVideoEditorRequest:
    security: AuthVideoEditorSecurity = dataclasses.field()
    request: Optional[shared_videoeditortokenrequest.VideoEditorTokenRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AuthVideoEditorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    video_editor_token_response: Optional[shared_videoeditortokenresponse.VideoEditorTokenResponse] = dataclasses.field(default=None)
    
