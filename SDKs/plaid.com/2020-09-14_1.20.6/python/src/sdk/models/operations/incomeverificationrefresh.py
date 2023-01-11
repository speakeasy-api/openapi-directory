import dataclasses
from typing import Any,Optional
from ..shared import incomeverificationrefreshrequest as shared_incomeverificationrefreshrequest
from ..shared import incomeverificationrefreshresponse as shared_incomeverificationrefreshresponse


@dataclasses.dataclass
class IncomeVerificationRefreshRequest:
    request: shared_incomeverificationrefreshrequest.IncomeVerificationRefreshRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncomeVerificationRefreshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    income_verification_refresh_response: Optional[shared_incomeverificationrefreshresponse.IncomeVerificationRefreshResponse] = dataclasses.field(default=None)
    
