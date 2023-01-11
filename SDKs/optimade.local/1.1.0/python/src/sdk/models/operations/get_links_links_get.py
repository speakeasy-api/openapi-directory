import dataclasses
from typing import Optional
from ..shared import errorresponse as shared_errorresponse
from ..shared import linksresponse as shared_linksresponse


@dataclasses.dataclass
class GetLinksLinksGetQueryParams:
    api_hint: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_hint', 'style': 'form', 'explode': True }})
    email_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email_address', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    page_above: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_above', 'style': 'form', 'explode': True }})
    page_below: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_below', 'style': 'form', 'explode': True }})
    page_cursor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_cursor', 'style': 'form', 'explode': True }})
    page_limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_number', 'style': 'form', 'explode': True }})
    page_offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_offset', 'style': 'form', 'explode': True }})
    response_fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_fields', 'style': 'form', 'explode': True }})
    response_format: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'response_format', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLinksLinksGetRequest:
    query_params: GetLinksLinksGetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLinksLinksGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    links_response: Optional[shared_linksresponse.LinksResponse] = dataclasses.field(default=None)
    
