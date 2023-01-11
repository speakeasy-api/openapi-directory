import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChromosomeByAssemblyUsingGetPathParams:
    chromosome: str = dataclasses.field(metadata={'path_param': { 'field_name': 'chromosome', 'style': 'simple', 'explode': False }})
    map_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChromosomeByAssemblyUsingGetRequest:
    path_params: GetChromosomeByAssemblyUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChromosomeByAssemblyUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
