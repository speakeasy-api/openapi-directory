import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetAcmeExternalAccountBindingPathParams:
    customer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAcmeExternalAccountBindingRequest:
    path_params: GetAcmeExternalAccountBindingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAcmeExternalAccountBindingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    external_account_binding: Optional[Any] = dataclasses.field(default=None)
    
