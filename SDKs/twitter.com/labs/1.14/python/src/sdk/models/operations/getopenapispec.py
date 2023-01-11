import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetOpenAPISpecResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_open_api_spec_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
