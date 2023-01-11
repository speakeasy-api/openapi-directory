import dataclasses
from typing import Optional
from ..shared import example112 as shared_example112


@dataclasses.dataclass
class GetScanResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example112s: Optional[list[shared_example112.Example112]] = dataclasses.field(default=None)
    
