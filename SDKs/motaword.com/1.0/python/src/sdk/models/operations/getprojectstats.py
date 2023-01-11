import dataclasses
from typing import Optional
from ..shared import clientprojectstats as shared_clientprojectstats
from ..shared import error as shared_error


@dataclasses.dataclass
class GetProjectStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_project_stats: Optional[shared_clientprojectstats.ClientProjectStats] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
