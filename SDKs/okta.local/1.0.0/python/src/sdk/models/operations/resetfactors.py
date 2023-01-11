import dataclasses
from typing import Optional


@dataclasses.dataclass
class ResetFactorsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetFactorsRequest:
    path_params: ResetFactorsPathParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclasses.dataclass
class ResetFactorsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
