import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatchQuoteQueryParams:
    id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    quote: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quote', 'style': 'form', 'explode': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchQuoteSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PatchQuoteRequest:
    query_params: PatchQuoteQueryParams = dataclasses.field()
    security: PatchQuoteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatchQuoteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
