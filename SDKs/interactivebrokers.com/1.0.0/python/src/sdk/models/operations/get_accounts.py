import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAccountsQueryParams:
    account: str = dataclasses.field(metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetAccounts200ApplicationJSON:
    accounts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

@dataclasses.dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_accounts_200_application_json_object: Optional[GetAccounts200ApplicationJSON] = dataclasses.field(default=None)
    
