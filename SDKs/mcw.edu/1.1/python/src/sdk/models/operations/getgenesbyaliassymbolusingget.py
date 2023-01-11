import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetGenesByAliasSymbolUsingGetPathParams:
    alias_symbol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'aliasSymbol', 'style': 'simple', 'explode': False }})
    species_type_key: int = dataclasses.field(metadata={'path_param': { 'field_name': 'speciesTypeKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGenesByAliasSymbolUsingGetRequest:
    path_params: GetGenesByAliasSymbolUsingGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGenesByAliasSymbolUsingGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
