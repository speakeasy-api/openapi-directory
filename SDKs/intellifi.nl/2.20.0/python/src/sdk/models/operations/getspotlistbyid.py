import dataclasses
from typing import Optional
from ..shared import spotlist as shared_spotlist


@dataclasses.dataclass
class GetSpotListByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpotListByIDRequest:
    path_params: GetSpotListByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpotListByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    spot_list: Optional[shared_spotlist.SpotList] = dataclasses.field(default=None)
    
