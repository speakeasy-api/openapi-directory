import dataclasses
from typing import Any,Optional
from ..shared import topuprequest as shared_topuprequest
from ..shared import success as shared_success
from ..shared import errorauthenticationfailed as shared_errorauthenticationfailed
from ..shared import errorautoreloadnotenabled as shared_errorautoreloadnotenabled


TOP_UP_ACCOUNT_BALANCE_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclasses.dataclass
class TopUpAccountBalanceQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TopUpAccountBalanceRequest:
    query_params: TopUpAccountBalanceQueryParams = dataclasses.field()
    request: shared_topuprequest.TopupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class TopUpAccountBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    success: Optional[shared_success.Success] = dataclasses.field(default=None)
    top_up_account_balance_401_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    
