import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AppsGetAuthenticatedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    integration: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
