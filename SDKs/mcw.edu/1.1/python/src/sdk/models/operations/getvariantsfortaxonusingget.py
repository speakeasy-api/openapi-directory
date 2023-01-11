import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVariantsForTaxonUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVariantsForTaxonUsingGetRequest:
    path_params: GetVariantsForTaxonUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetVariantsForTaxonUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
