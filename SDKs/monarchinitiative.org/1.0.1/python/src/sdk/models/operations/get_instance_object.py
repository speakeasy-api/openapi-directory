import dataclasses
from typing import Optional
from ..shared import association as shared_association


@dataclasses.dataclass
class GetInstanceObjectPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInstanceObjectQueryParams:
    contributor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetInstanceObjectRequest:
    path_params: GetInstanceObjectPathParams = dataclasses.field()
    query_params: GetInstanceObjectQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInstanceObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
