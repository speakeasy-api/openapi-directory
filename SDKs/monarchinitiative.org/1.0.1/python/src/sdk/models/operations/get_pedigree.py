import dataclasses
from typing import Optional
from ..shared import association as shared_association


@dataclasses.dataclass
class GetPedigreePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPedigreeRequest:
    path_params: GetPedigreePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPedigreeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associations: Optional[list[shared_association.Association]] = dataclasses.field(default=None)
    
