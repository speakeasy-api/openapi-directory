import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMapsUsingGetPathParams:
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapsUsingGetRequest:
    path_params: GetMapsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
