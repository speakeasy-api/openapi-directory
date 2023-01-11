import dataclasses
from typing import Any,Optional
from ..shared import incomeverificationsummarygetrequest as shared_incomeverificationsummarygetrequest


@dataclasses.dataclass
class IncomeVerificationSummaryGetRequest:
    request: shared_incomeverificationsummarygetrequest.IncomeVerificationSummaryGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IncomeVerificationSummaryGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    income_verification_summary_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
