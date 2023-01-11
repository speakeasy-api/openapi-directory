import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMapsUsingGet1PathParams:
    acc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapsUsingGet1Request:
    path_params: GetMapsUsingGet1PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapsUsingGet1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_maps_using_get_1_200_wildcard_string: Optional[str] = dataclasses.field(default=None)
    
