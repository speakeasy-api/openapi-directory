import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import stats as shared_stats


@dataclasses.dataclass
class GlobalLiveStatsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GlobalLiveStatsRequest:
    security: GlobalLiveStatsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GlobalLiveStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stats: Optional[shared_stats.Stats] = dataclasses.field(default=None)
    
