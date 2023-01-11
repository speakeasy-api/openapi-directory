import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetEnsemblProteinMappingUsingGetPathParams:
    rgd_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnsemblProteinMappingUsingGetRequest:
    path_params: GetEnsemblProteinMappingUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnsemblProteinMappingUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
