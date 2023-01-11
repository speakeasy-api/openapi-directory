import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetSpotListIdsByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpotListIdsByIDRequest:
    path_params: GetSpotListIdsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpotListIdsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_of_item_ids: Optional[list[str]] = dataclasses.field(default=None)
    
