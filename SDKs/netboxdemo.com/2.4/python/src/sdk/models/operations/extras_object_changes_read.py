import dataclasses
from typing import Optional
from ..shared import objectchange as shared_objectchange


@dataclasses.dataclass
class ExtrasObjectChangesReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExtrasObjectChangesReadRequest:
    path_params: ExtrasObjectChangesReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ExtrasObjectChangesReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    object_change: Optional[shared_objectchange.ObjectChange] = dataclasses.field(default=None)
    
