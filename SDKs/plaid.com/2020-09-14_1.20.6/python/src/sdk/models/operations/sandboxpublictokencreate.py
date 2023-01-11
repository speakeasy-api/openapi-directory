import dataclasses
from typing import Any,Optional
from ..shared import sandboxpublictokencreaterequest as shared_sandboxpublictokencreaterequest


@dataclasses.dataclass
class SandboxPublicTokenCreateRequest:
    request: shared_sandboxpublictokencreaterequest.SandboxPublicTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxPublicTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_public_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
