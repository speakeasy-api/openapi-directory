import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFunctionAssociationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFunctionAssociationsQueryParams:
    evidence: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFunctionAssociationsRequest:
    path_params: GetFunctionAssociationsPathParams = dataclasses.field()
    query_params: GetFunctionAssociationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFunctionAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
