import dataclasses
from typing import Optional
from ..shared import otoroshihealth as shared_otoroshihealth


@dataclasses.dataclass
class HealthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    otoroshi_health: Optional[shared_otoroshihealth.OtoroshiHealth] = dataclasses.field(default=None)
    
