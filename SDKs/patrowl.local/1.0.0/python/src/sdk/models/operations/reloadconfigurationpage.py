import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReloadConfigurationPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response: Optional[Any] = dataclasses.field(default=None)
    
