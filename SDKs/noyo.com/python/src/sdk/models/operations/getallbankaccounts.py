import dataclasses
from typing import Optional
from ..shared import bankaccountpaginatedresult as shared_bankaccountpaginatedresult


@dataclasses.dataclass
class GetAllBankAccountsPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllBankAccountsRequest:
    path_params: GetAllBankAccountsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllBankAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bank_account_paginated_result: Optional[shared_bankaccountpaginatedresult.BankAccountPaginatedResult] = dataclasses.field(default=None)
    
