import dataclasses
from typing import Optional
from ..shared import example113 as shared_example113


@dataclasses.dataclass
class GetSavedNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example113s: Optional[list[shared_example113.Example113]] = dataclasses.field(default=None)
    
