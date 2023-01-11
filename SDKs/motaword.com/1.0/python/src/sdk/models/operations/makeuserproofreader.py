import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class MakeUserProofreaderPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MakeUserProofreaderSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class MakeUserProofreaderRequest:
    path_params: MakeUserProofreaderPathParams = dataclasses.field()
    security: MakeUserProofreaderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class MakeUserProofreaderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
