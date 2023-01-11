import dataclasses
from typing import Any,Optional
from ..shared import sandboxprocessortokencreaterequest as shared_sandboxprocessortokencreaterequest


@dataclasses.dataclass
class SandboxProcessorTokenCreateRequest:
    request: shared_sandboxprocessortokencreaterequest.SandboxProcessorTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxProcessorTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_processor_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
