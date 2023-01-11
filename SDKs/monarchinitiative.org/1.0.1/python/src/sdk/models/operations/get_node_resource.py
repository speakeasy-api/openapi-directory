import dataclasses
from typing import Optional
from ..shared import bioobject as shared_bioobject


@dataclasses.dataclass
class GetNodeResourcePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNodeResourceRequest:
    path_params: GetNodeResourcePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNodeResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bio_objects: Optional[list[shared_bioobject.BioObject]] = dataclasses.field(default=None)
    
