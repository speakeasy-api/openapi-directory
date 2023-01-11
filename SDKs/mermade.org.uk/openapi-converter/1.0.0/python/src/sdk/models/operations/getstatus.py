import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_status_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
