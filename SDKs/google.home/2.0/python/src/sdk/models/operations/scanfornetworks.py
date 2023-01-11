import dataclasses
from typing import Optional


@dataclasses.dataclass
class ScanforNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scanfor_networks_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
