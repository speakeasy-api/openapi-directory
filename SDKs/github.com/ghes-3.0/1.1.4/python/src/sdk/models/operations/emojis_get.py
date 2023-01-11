import dataclasses
from typing import Optional


@dataclasses.dataclass
class EmojisGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    emojis_get_200_application_json_object: Optional[dict[str, str]] = dataclasses.field(default=None)
    
