import dataclasses
from typing import Any,Optional
from ..shared import depositswitchcreaterequest as shared_depositswitchcreaterequest


@dataclasses.dataclass
class DepositSwitchCreateRequest:
    request: shared_depositswitchcreaterequest.DepositSwitchCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DepositSwitchCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deposit_switch_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
