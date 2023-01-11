import dataclasses
from typing import Any,Optional
from ..shared import depositswitchgetrequest as shared_depositswitchgetrequest


@dataclasses.dataclass
class DepositSwitchGetRequest:
    request: shared_depositswitchgetrequest.DepositSwitchGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DepositSwitchGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deposit_switch_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
