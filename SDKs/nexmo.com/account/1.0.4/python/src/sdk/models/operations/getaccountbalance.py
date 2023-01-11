import dataclasses
from typing import Optional
from ..shared import errorauthenticationfailedaccountbalance as shared_errorauthenticationfailedaccountbalance
from ..shared import accountbalance as shared_accountbalance


GET_ACCOUNT_BALANCE_SERVERS = [
	"https://rest.nexmo.com",
]


@dataclasses.dataclass
class GetAccountBalanceQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountBalanceRequest:
    query_params: GetAccountBalanceQueryParams = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetAccountBalanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error_authentication_failed_account_balance: Optional[shared_errorauthenticationfailedaccountbalance.ErrorAuthenticationFailedAccountBalance] = dataclasses.field(default=None)
    account_balance: Optional[shared_accountbalance.AccountBalance] = dataclasses.field(default=None)
    
