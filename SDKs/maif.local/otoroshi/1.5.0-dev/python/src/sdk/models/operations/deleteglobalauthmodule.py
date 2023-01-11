import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteGlobalAuthModulePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteGlobalAuthModuleSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteGlobalAuthModuleRequest:
    path_params: DeleteGlobalAuthModulePathParams = dataclasses.field()
    security: DeleteGlobalAuthModuleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteGlobalAuthModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
