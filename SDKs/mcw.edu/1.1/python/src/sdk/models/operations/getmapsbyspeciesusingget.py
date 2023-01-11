import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMapsBySpeciesUsingGetPathParams:
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapsBySpeciesUsingGetRequest:
    path_params: GetMapsBySpeciesUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapsBySpeciesUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
