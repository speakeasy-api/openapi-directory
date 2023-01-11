import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_insurance_balance_response_body as shared_get_insurance_balance_response_body


@dataclasses.dataclass
class GetInsuranceBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_insurance_balance_response_body: Optional[shared_get_insurance_balance_response_body.GetInsuranceBalanceResponseBody] = dataclasses.field(default=None)
    
