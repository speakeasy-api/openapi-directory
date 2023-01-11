import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import spin as shared_spin


@dataclasses.dataclass
class GetSpinsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSpinsIDQueryParams:
    expand: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSpinsIDRequest:
    path_params: GetSpinsIDPathParams = dataclasses.field()
    query_params: GetSpinsIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpinsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    spin: Optional[shared_spin.Spin] = dataclasses.field(default=None)
    
