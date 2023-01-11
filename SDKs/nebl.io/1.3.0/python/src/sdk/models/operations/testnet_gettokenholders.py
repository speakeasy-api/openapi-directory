import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import gettokenholdersresponse as shared_gettokenholdersresponse


@dataclasses.dataclass
class TestnetGetTokenHoldersPathParams:
    tokenid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetTokenHoldersRequest:
    path_params: TestnetGetTokenHoldersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetTokenHoldersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    get_token_holders_response: Optional[shared_gettokenholdersresponse.GetTokenHoldersResponse] = dataclasses.field(default=None)
    
