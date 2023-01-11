import dataclasses
from typing import Optional


@dataclasses.dataclass
class GitignoreGetAllTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    gitignore_get_all_templates_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
