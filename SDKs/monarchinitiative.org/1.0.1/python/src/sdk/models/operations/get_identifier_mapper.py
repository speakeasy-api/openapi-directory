import dataclasses
from typing import Optional
from ..shared import association as shared_association


@dataclasses.dataclass
class GetIdentifierMapperPathParams:
    source: str = dataclasses.field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    target: str = dataclasses.field(metadata={'path_param': { 'field_name': 'target', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetIdentifierMapperRequest:
    path_params: GetIdentifierMapperPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetIdentifierMapperResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
