import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ProductNumberPathParams:
    product_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProductNumberSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ProductNumberRequest:
    path_params: ProductNumberPathParams = dataclasses.field()
    security: ProductNumberSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProductNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
