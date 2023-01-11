import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenesByKeywordUsingGetPathParams:
    keyword: str = dataclasses.field(metadata={'path_param': { 'field_name': 'keyword', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenesByKeywordUsingGetRequest:
    path_params: GetGenesByKeywordUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenesByKeywordUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
