import dataclasses
from typing import Optional
from ..shared import getblockresponse as shared_getblockresponse


@dataclasses.dataclass
class GetBlockPathParams:
    blockhash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'blockhash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlockRequest:
    path_params: GetBlockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_block_response: Optional[shared_getblockresponse.GetBlockResponse] = dataclasses.field(default=None)
    
