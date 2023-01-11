import dataclasses
from typing import Any,Optional
from ..shared import payorcreateapikeyrequest as shared_payorcreateapikeyrequest
from ..shared import payorcreateapikeyresponse as shared_payorcreateapikeyresponse


@dataclasses.dataclass
class PayorCreateAPIKeyRequestPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'applicationId', 'style': 'simple', 'explode': False }})
    payor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PayorCreateAPIKeyRequestRequest:
    path_params: PayorCreateAPIKeyRequestPathParams = dataclasses.field()
    request: shared_payorcreateapikeyrequest.PayorCreateAPIKeyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PayorCreateAPIKeyRequestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payor_create_api_key_response: Optional[shared_payorcreateapikeyresponse.PayorCreateAPIKeyResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
