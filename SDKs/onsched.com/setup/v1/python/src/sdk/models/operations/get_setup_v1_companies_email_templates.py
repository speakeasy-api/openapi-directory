import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetSetupV1CompaniesEmailTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_template_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
