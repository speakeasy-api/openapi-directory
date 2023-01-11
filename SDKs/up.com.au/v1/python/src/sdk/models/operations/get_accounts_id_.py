import dataclasses
from typing import Optional
from ..shared import getaccountresponse as shared_getaccountresponse


@dataclasses.dataclass
class GetAccountsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsIDRequest:
    path_params: GetAccountsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_account_response: Optional[shared_getaccountresponse.GetAccountResponse] = dataclasses.field(default=None)
    
