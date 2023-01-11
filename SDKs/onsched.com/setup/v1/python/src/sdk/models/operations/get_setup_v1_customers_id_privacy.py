import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CustomersIDPrivacyPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1CustomersIDPrivacyRequest:
    path_params: GetSetupV1CustomersIDPrivacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1CustomersIDPrivacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    customer_privacy_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
