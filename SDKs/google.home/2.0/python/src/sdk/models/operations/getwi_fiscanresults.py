import dataclasses
from typing import Optional
from ..shared import example114 as shared_example114


@dataclasses.dataclass
class GetWiFiScanResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example114s: Optional[list[shared_example114.Example114]] = dataclasses.field(default=None)
    
