import dataclasses
from typing import Any,Optional
from ..shared import depositswitchtokencreaterequest as shared_depositswitchtokencreaterequest


@dataclasses.dataclass
class DepositSwitchTokenCreateRequest:
    request: shared_depositswitchtokencreaterequest.DepositSwitchTokenCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DepositSwitchTokenCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deposit_switch_token_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
