import dataclasses
from typing import Optional
from ..shared import example111 as shared_example111


@dataclasses.dataclass
class GetPairedDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    example111s: Optional[list[shared_example111.Example111]] = dataclasses.field(default=None)
    
