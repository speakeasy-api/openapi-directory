import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPhenotypesForTaxonUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPhenotypesForTaxonUsingGetRequest:
    path_params: GetPhenotypesForTaxonUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPhenotypesForTaxonUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
