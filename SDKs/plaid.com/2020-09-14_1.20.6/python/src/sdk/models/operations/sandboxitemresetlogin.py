import dataclasses
from typing import Any,Optional
from ..shared import sandboxitemresetloginrequest as shared_sandboxitemresetloginrequest


@dataclasses.dataclass
class SandboxItemResetLoginRequest:
    request: shared_sandboxitemresetloginrequest.SandboxItemResetLoginRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxItemResetLoginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sandbox_item_reset_login_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
