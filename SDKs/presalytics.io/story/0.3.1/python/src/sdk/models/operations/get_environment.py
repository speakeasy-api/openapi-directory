import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_environment_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
