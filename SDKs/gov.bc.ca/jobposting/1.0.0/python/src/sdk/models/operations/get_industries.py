import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import industry as shared_industry


@dataclasses.dataclass
class GetIndustriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    industries: Optional[list[shared_industry.Industry]] = dataclasses.field(default=None)
    
