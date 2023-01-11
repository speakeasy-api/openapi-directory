import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFunctionPublicationAssociationsPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFunctionPublicationAssociationsQueryParams:
    evidence: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'evidence', 'style': 'form', 'explode': True }})
    rows: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rows', 'style': 'form', 'explode': True }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFunctionPublicationAssociationsRequest:
    path_params: GetFunctionPublicationAssociationsPathParams = dataclasses.field()
    query_params: GetFunctionPublicationAssociationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFunctionPublicationAssociationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
