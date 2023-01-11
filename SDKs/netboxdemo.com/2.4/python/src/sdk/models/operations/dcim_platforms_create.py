import dataclasses
from typing import Optional
from ..shared import writableplatform as shared_writableplatform
from ..shared import platform as shared_platform


@dataclasses.dataclass
class DcimPlatformsCreateRequest:
    request: shared_writableplatform.WritablePlatformInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPlatformsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    platform: Optional[shared_platform.Platform] = dataclasses.field(default=None)
    
