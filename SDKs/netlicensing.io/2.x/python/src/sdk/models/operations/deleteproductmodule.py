import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteProductModulePathParams:
    product_module_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteProductModuleQueryParams:
    force_cascade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteProductModuleSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteProductModuleRequest:
    path_params: DeleteProductModulePathParams = dataclasses.field()
    query_params: DeleteProductModuleQueryParams = dataclasses.field()
    security: DeleteProductModuleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteProductModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
