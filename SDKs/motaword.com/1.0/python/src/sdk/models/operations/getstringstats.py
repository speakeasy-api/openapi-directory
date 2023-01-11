import dataclasses
from typing import Optional
from ..shared import clientstringstats as shared_clientstringstats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetStringStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_string_stats: Optional[shared_clientstringstats.ClientStringStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
