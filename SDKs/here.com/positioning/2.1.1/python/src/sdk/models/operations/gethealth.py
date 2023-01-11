import dataclasses
from typing import Optional
from ..shared import apihealthstatus as shared_apihealthstatus


@dataclasses.dataclass
class GetHealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_health_status: Optional[shared_apihealthstatus.APIHealthStatus] = dataclasses.field(default=None)
    
