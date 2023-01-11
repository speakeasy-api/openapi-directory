import dataclasses
from typing import Optional
from ..shared import typeaheadresponse as shared_typeaheadresponse


@dataclasses.dataclass
class TypeaheadQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    show_genres: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_genres', 'style': 'form', 'explode': True }})
    show_podcasts: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'show_podcasts', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TypeaheadHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TypeaheadRequest:
    headers: TypeaheadHeaders = dataclasses.field()
    query_params: TypeaheadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TypeaheadResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    typeahead_response: Optional[shared_typeaheadresponse.TypeaheadResponse] = dataclasses.field(default=None)
    
