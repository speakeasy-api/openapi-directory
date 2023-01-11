import dataclasses
from typing import Optional
from ..shared import spotset as shared_spotset


@dataclasses.dataclass
class GetSpotSetsByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpotSetsByIDRequest:
    path_params: GetSpotSetsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpotSetsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spot_set: Optional[shared_spotset.SpotSet] = dataclasses.field(default=None)
    
