import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDocumentationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_documentation_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
