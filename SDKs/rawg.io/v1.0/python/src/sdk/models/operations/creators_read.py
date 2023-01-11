import dataclasses
from typing import Optional
from ..shared import personsingle as shared_personsingle


@dataclasses.dataclass
class CreatorsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatorsReadRequest:
    path_params: CreatorsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CreatorsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    person_single: Optional[shared_personsingle.PersonSingle] = dataclasses.field(default=None)
    
