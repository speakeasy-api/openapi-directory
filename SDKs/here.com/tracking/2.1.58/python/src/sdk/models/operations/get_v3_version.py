import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetV3VersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_v3_version_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
