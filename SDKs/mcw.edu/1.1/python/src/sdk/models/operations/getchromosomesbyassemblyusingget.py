import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChromosomesByAssemblyUsingGetPathParams:
    map_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'mapKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetChromosomesByAssemblyUsingGetRequest:
    path_params: GetChromosomesByAssemblyUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetChromosomesByAssemblyUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
