import dataclasses
from typing import Optional
from ..shared import scanfordevicesrequest as shared_scanfordevicesrequest


@dataclasses.dataclass
class ScanfordevicesRequest:
    request: shared_scanfordevicesrequest.ScanfordevicesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScanfordevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scanfordevices_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
