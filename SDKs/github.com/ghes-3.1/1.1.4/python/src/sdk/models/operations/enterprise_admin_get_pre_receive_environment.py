import dataclasses
from typing import Optional
from ..shared import pre_receive_environment as shared_pre_receive_environment


@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminGetPreReceiveEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_environment: Optional[shared_pre_receive_environment.PreReceiveEnvironment] = dataclasses.field(default=None)
    
