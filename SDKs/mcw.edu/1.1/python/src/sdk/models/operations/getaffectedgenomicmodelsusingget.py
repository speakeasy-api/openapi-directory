import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAffectedGenomicModelsUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAffectedGenomicModelsUsingGetRequest:
    path_params: GetAffectedGenomicModelsUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAffectedGenomicModelsUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
