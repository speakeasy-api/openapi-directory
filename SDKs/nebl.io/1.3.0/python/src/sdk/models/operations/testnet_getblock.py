import dataclasses
from typing import Optional
from ..shared import getblockresponse as shared_getblockresponse


@dataclasses.dataclass
class TestnetGetBlockPathParams:
    blockhash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetBlockRequest:
    path_params: TestnetGetBlockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_block_response: Optional[shared_getblockresponse.GetBlockResponse] = dataclasses.field(default=None)
    
