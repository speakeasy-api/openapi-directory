import dataclasses
from typing import Optional
from ..shared import getblockindexresponse as shared_getblockindexresponse


@dataclasses.dataclass
class GetBlockIndexPathParams:
    blockindex: float = dataclasses.field(metadata={'path_param': { 'field_name': 'blockindex', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlockIndexRequest:
    path_params: GetBlockIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBlockIndexResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_block_index_response: Optional[shared_getblockindexresponse.GetBlockIndexResponse] = dataclasses.field(default=None)
    
