import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import stats as shared_stats


@dataclasses.dataclass
class GetStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    stats: Optional[shared_stats.Stats] = dataclasses.field(default=None)
    
