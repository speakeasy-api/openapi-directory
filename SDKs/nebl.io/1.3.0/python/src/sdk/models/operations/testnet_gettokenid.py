import dataclasses
from typing import Optional
from ..shared import gettokenidresponse as shared_gettokenidresponse


@dataclasses.dataclass
class TestnetGetTokenIDPathParams:
    tokensymbol: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tokensymbol', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestnetGetTokenIDRequest:
    path_params: TestnetGetTokenIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestnetGetTokenIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_token_id_response: Optional[shared_gettokenidresponse.GetTokenIDResponse] = dataclasses.field(default=None)
    
