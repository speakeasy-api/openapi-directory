import dataclasses
from typing import Any,Optional
from ..shared import sandboxoauthselectaccountsrequest as shared_sandboxoauthselectaccountsrequest


@dataclasses.dataclass
class SandboxOauthSelectAccountsRequest:
    request: shared_sandboxoauthselectaccountsrequest.SandboxOauthSelectAccountsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SandboxOauthSelectAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    sandbox_oauth_select_accounts_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
