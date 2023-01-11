import dataclasses
from typing import Any,Optional
from ..shared import listsourceaccountresponse as shared_listsourceaccountresponse


@dataclasses.dataclass
class GetSourceAccountsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    physical_account_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'physicalAccountName', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSourceAccountsRequest:
    query_params: GetSourceAccountsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSourceAccountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_source_account_response: Optional[shared_listsourceaccountresponse.ListSourceAccountResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    
