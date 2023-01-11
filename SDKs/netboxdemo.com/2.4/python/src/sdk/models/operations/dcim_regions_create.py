import dataclasses
from typing import Optional
from ..shared import writableregion as shared_writableregion
from ..shared import region as shared_region


@dataclasses.dataclass
class DcimRegionsCreateRequest:
    request: shared_writableregion.WritableRegionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRegionsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region: Optional[shared_region.Region] = dataclasses.field(default=None)
    
