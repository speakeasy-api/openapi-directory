import dataclasses
from typing import Optional
from ..shared import listaccountsresponse as shared_listaccountsresponse


@dataclasses.dataclass
class GetAccountsQueryParams:
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountsRequest:
    query_params: GetAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_accounts_response: Optional[shared_listaccountsresponse.ListAccountsResponse] = dataclasses.field(default=None)
    
