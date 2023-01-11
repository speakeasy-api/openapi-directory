import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetProductModulePathParams:
    product_module_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProductModuleSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetProductModuleRequest:
    path_params: GetProductModulePathParams = dataclasses.field()
    security: GetProductModuleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetProductModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
