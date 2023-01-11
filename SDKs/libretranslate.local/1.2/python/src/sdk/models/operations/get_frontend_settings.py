import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFrontendSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
