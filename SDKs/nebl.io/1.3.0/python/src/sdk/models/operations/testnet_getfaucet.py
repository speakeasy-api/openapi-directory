import dataclasses
from typing import Optional
from ..shared import getfaucetresponse as shared_getfaucetresponse


@dataclasses.dataclass
class TestnetGetFaucetQueryParams:
    address: str = dataclasses.field(metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    amount: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TestnetGetFaucetRequest:
    query_params: TestnetGetFaucetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetFaucetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_faucet_response: Optional[shared_getfaucetresponse.GetFaucetResponse] = dataclasses.field(default=None)
    
