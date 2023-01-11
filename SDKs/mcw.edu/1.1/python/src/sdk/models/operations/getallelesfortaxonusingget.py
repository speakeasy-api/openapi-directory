import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAllelesForTaxonUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllelesForTaxonUsingGetRequest:
    path_params: GetAllelesForTaxonUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllelesForTaxonUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
