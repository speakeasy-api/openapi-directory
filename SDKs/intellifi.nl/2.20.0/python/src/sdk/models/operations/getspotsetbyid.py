import dataclasses
from typing import Optional
from ..shared import spotset as shared_spotset


@dataclasses.dataclass
class GetSpotSetByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    set_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'setId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpotSetByIDRequest:
    path_params: GetSpotSetByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpotSetByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spot_set: Optional[shared_spotset.SpotSet] = dataclasses.field(default=None)
    
