import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import clientprojectstats as shared_clientprojectstats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetUserProjectStatsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserProjectStatsSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserProjectStatsRequest:
    path_params: GetUserProjectStatsPathParams = dataclasses.field()
    security: GetUserProjectStatsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserProjectStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_project_stats: Optional[shared_clientprojectstats.ClientProjectStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
