import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CancelPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelHeaders:
    x_shopper_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Shopper-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CancelRequest:
    headers: CancelHeaders = dataclasses.field()
    path_params: CancelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CancelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[Any] = dataclasses.field(default=None)
    error_limit: Optional[Any] = dataclasses.field(default=None)
    
