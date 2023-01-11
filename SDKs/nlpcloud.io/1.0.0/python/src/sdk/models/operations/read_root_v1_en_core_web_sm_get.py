import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReadRootV1EnCoreWebSmGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    read_root_v1_en_core_web_sm_get_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
