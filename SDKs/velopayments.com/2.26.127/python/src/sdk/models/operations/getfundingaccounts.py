import dataclasses
from typing import Any,Optional
from ..shared import listfundingaccountsresponse as shared_listfundingaccountsresponse


@dataclasses.dataclass
class GetFundingAccountsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_account_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFundingAccountsRequest:
    query_params: GetFundingAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFundingAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_funding_accounts_response: Optional[shared_listfundingaccountsresponse.ListFundingAccountsResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
