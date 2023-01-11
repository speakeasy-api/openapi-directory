import dataclasses
from typing import Any,Optional
from ..shared import paymentinstructionv3 as shared_paymentinstructionv3
from ..shared import createpayoutrequestv3 as shared_createpayoutrequestv3


@dataclasses.dataclass
class SubmitPayoutV3MultipartFormData:
    file: Optional[list[shared_paymentinstructionv3.PaymentInstructionV3]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'file', 'json': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payorId' }})
    payout_from_payor_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payoutFromPayorId' }})
    payout_to_payor_id: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'payoutToPayorId' }})
    

@dataclasses.dataclass
class SubmitPayoutV3Requests:
    create_payout_request_v3: Optional[shared_createpayoutrequestv3.CreatePayoutRequestV3] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    object: Optional[SubmitPayoutV3MultipartFormData] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class SubmitPayoutV3Request:
    request: SubmitPayoutV3Requests = dataclasses.field()
    

@dataclasses.dataclass
class SubmitPayoutV3Response:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
