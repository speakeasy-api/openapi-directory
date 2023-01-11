import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import createaudiorendersrequest as shared_createaudiorendersrequest


@dataclasses.dataclass
class CreateAudioRendersSecurity:
    basic: Optional[shared_security.SchemeBasic] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    customer_access_code: Optional[shared_security.SchemeCustomerAccessCode] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CreateAudioRendersRequest:
    request: shared_createaudiorendersrequest.CreateAudioRendersRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAudioRendersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateAudioRendersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    audio_renders_list_results: Optional[Any] = dataclasses.field(default=None)
    
