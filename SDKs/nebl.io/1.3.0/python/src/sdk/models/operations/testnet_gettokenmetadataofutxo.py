import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import gettokenmetadataresponse as shared_gettokenmetadataresponse


@dataclasses.dataclass
class TestnetGetTokenMetadataOfUtxoPathParams:
    tokenid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    utxo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'utxo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetTokenMetadataOfUtxoQueryParams:
    verbosity: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TestnetGetTokenMetadataOfUtxoRequest:
    path_params: TestnetGetTokenMetadataOfUtxoPathParams = dataclasses.field()
    query_params: TestnetGetTokenMetadataOfUtxoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetTokenMetadataOfUtxoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_token_metadata_response: Optional[shared_gettokenmetadataresponse.GetTokenMetadataResponse] = dataclasses.field(default=None)
    
