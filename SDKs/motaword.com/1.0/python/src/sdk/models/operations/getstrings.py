import dataclasses
from typing import Optional
from ..shared import clientstrings as shared_clientstrings


@dataclasses.dataclass
class GetStringsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source_language', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetStringsRequest:
    query_params: GetStringsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetStringsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_strings: Optional[shared_clientstrings.ClientStrings] = dataclasses.field(default=None)
    
