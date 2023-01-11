import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGeneBySymbolUsingGetPathParams:
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    symbol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'symbol', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGeneBySymbolUsingGetRequest:
    path_params: GetGeneBySymbolUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGeneBySymbolUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
