import dataclasses
from typing import Optional
from ..shared import integratorcardpayloadresponse as shared_integratorcardpayloadresponse


@dataclasses.dataclass
class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    integrator_card_payload_response: Optional[shared_integratorcardpayloadresponse.IntegratorCardPayloadResponse] = dataclasses.field(default=None)
    
