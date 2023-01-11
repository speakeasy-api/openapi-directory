import dataclasses
from typing import Optional
from ..shared import language as shared_language


@dataclasses.dataclass
class GetLanguagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    languages: Optional[list[shared_language.Language]] = dataclasses.field(default=None)
    
