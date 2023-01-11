import dataclasses
from typing import Optional
from ..shared import add_funds_to_insurance_request_body as shared_add_funds_to_insurance_request_body
from ..shared import add_funds_to_insurance_response_body as shared_add_funds_to_insurance_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class AddFundsToInsuranceRequest:
    request: shared_add_funds_to_insurance_request_body.AddFundsToInsuranceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddFundsToInsuranceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_funds_to_insurance_response_body: Optional[shared_add_funds_to_insurance_response_body.AddFundsToInsuranceResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
