import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetExpressionForTaxonUsingGetPathParams:
    taxon_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taxonId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExpressionForTaxonUsingGetRequest:
    path_params: GetExpressionForTaxonUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetExpressionForTaxonUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
