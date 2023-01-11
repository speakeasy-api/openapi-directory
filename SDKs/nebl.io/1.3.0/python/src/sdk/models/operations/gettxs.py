import dataclasses
from typing import Optional
from ..shared import gettxsresponse as shared_gettxsresponse


@dataclasses.dataclass
class GetTxsQueryParams:
    address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'block', 'style': 'form', 'explode': True }})
    page_num: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageNum', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTxsRequest:
    query_params: GetTxsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTxsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_txs_response: Optional[shared_gettxsresponse.GetTxsResponse] = dataclasses.field(default=None)
    
