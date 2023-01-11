import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OrdersPathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    order_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'orderID', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrdersHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrdersSecurity:
    auth: shared_security.SchemeAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OrdersRequest:
    headers: OrdersHeaders = dataclasses.field()
    path_params: OrdersPathParams = dataclasses.field()
    security: OrdersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    orders_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
