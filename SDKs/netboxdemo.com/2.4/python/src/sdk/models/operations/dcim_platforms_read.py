import dataclasses
from typing import Optional
from ..shared import platform as shared_platform


@dataclasses.dataclass
class DcimPlatformsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPlatformsReadRequest:
    path_params: DcimPlatformsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimPlatformsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    platform: Optional[shared_platform.Platform] = dataclasses.field(default=None)
    
