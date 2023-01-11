import dataclasses
from typing import Optional


@dataclasses.dataclass
class LegalNoticeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    legal_notice_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
