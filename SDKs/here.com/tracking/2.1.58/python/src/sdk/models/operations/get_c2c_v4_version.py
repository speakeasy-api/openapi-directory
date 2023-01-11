import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetC2cV4VersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_c2c_v4_version_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
