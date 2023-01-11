import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import stats as shared_stats


@dataclasses.dataclass
class ServiceLiveStatsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ServiceLiveStatsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ServiceLiveStatsRequest:
    path_params: ServiceLiveStatsPathParams = dataclasses.field()
    security: ServiceLiveStatsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ServiceLiveStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    stats: Optional[shared_stats.Stats] = dataclasses.field(default=None)
    
