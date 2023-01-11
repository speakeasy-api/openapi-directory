import dataclasses
from typing import Any,Optional
from ..shared import sandboxitemsetverificationstatusrequest as shared_sandboxitemsetverificationstatusrequest


@dataclasses.dataclass
class SandboxItemSetVerificationStatusRequest:
    request: shared_sandboxitemsetverificationstatusrequest.SandboxItemSetVerificationStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxItemSetVerificationStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sandbox_item_set_verification_status_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
