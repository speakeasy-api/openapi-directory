import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEnsemblGeneMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnsemblGeneMappingUsingGetRequest:
    path_params: GetEnsemblGeneMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnsemblGeneMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
