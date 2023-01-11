import dataclasses
from typing import Any,Optional
from ..shared import depositswitchaltcreaterequest as shared_depositswitchaltcreaterequest


@dataclasses.dataclass
class DepositSwitchAltCreateRequest:
    request: shared_depositswitchaltcreaterequest.DepositSwitchAltCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DepositSwitchAltCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deposit_switch_alt_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
