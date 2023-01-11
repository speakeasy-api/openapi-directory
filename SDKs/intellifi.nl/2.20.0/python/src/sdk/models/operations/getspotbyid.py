import dataclasses
from typing import Optional
from ..shared import spotget as shared_spotget


@dataclasses.dataclass
class GetSpotByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpotByIDRequest:
    path_params: GetSpotByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpotByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spot_get: Optional[shared_spotget.SpotGet] = dataclasses.field(default=None)
    
