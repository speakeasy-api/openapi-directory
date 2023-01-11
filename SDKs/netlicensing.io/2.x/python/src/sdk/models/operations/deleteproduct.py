import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteProductPathParams:
    product_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductQueryParams:
    force_cascade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteProductSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteProductRequest:
    path_params: DeleteProductPathParams = dataclasses.field()
    query_params: DeleteProductQueryParams = dataclasses.field()
    security: DeleteProductSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
