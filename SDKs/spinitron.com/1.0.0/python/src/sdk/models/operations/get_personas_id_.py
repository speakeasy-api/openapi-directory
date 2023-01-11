import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import persona as shared_persona


@dataclasses.dataclass
class GetPersonasIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPersonasIDQueryParams:
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPersonasIDRequest:
    path_params: GetPersonasIDPathParams = dataclasses.field()
    query_params: GetPersonasIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPersonasIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    persona: Optional[shared_persona.Persona] = dataclasses.field(default=None)
    
