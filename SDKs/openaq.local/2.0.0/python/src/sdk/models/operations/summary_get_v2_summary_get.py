import dataclasses
from typing import Optional
from ..shared import openaqresult as shared_openaqresult


@dataclasses.dataclass
class SummaryGetV2SummaryGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    open_aq_result: Optional[shared_openaqresult.OpenAqResult] = dataclasses.field(default=None)
    
