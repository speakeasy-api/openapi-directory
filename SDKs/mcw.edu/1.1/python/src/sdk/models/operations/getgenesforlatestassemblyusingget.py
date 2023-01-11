import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenesForLatestAssemblyUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenesForLatestAssemblyUsingGetRequest:
    path_params: GetGenesForLatestAssemblyUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenesForLatestAssemblyUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
