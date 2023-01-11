import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listtransactionsresponse as shared_listtransactionsresponse


@dataclasses.dataclass
class GetAccountsAccountIDTransactionsPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsQueryParams:
    filter_category_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[category]', 'style': 'form', 'explode': True }})
    filter_since_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[since]', 'style': 'form', 'explode': True }})
    filter_status_: Optional[Any] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[status]', 'style': 'form', 'explode': True }})
    filter_tag_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[tag]', 'style': 'form', 'explode': True }})
    filter_until_: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter[until]', 'style': 'form', 'explode': True }})
    page_size_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page[size]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsRequest:
    path_params: GetAccountsAccountIDTransactionsPathParams = dataclasses.field()
    query_params: GetAccountsAccountIDTransactionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountsAccountIDTransactionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_transactions_response: Optional[shared_listtransactionsresponse.ListTransactionsResponse] = dataclasses.field(default=None)
    
