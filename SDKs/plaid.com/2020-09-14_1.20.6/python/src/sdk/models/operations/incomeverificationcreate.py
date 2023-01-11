import dataclasses
from typing import Any,Optional
from ..shared import incomeverificationcreaterequest as shared_incomeverificationcreaterequest


@dataclasses.dataclass
class IncomeVerificationCreateRequest:
    request: shared_incomeverificationcreaterequest.IncomeVerificationCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncomeVerificationCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    income_verification_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
