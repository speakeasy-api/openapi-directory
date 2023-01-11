import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PongPingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pong_ping_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
