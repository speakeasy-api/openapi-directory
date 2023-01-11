import dataclasses
from typing import Optional
from ..shared import statistics as shared_statistics


@dataclasses.dataclass
class RetrieveCurrentNeoStatisticsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    statistics: Optional[shared_statistics.Statistics] = dataclasses.field(default=None)
    
