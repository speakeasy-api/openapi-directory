import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import stats as shared_stats


@dataclasses.dataclass
class GetUserStatsPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserStatsSecurity:
    mwo_auth: shared_security.SchemeMwoAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetUserStatsRequest:
    path_params: GetUserStatsPathParams = dataclasses.field()
    security: GetUserStatsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetUserStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    stats: Optional[shared_stats.Stats] = dataclasses.field(default=None)
    
