import dataclasses
from typing import Optional
from ..shared import account_unauthorized as shared_account_unauthorized
from ..shared import inbound_numbers as shared_inbound_numbers


@dataclasses.dataclass
class GetOwnedNumbersQueryParams:
    application_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'application_id', 'style': 'form', 'explode': True }})
    country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    has_application: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'has_application', 'style': 'form', 'explode': True }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'index', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    search_pattern: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search_pattern', 'style': 'form', 'explode': True }})
    size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOwnedNumbersRequest:
    query_params: GetOwnedNumbersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOwnedNumbersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    account_unauthorized: Optional[shared_account_unauthorized.AccountUnauthorized] = dataclasses.field(default=None)
    inbound_numbers: Optional[shared_inbound_numbers.InboundNumbers] = dataclasses.field(default=None)
    
