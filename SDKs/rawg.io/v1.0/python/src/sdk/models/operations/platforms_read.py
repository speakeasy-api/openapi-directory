import dataclasses
from typing import Optional
from ..shared import platformsingle as shared_platformsingle


@dataclasses.dataclass
class PlatformsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PlatformsReadRequest:
    path_params: PlatformsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PlatformsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    platform_single: Optional[shared_platformsingle.PlatformSingle] = dataclasses.field(default=None)
    
