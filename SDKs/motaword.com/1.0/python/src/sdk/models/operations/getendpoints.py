import dataclasses
from typing import Any,Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class GetEndpointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_endpoints_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
