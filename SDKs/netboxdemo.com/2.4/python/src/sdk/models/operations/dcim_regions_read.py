import dataclasses
from typing import Optional
from ..shared import region as shared_region


@dataclasses.dataclass
class DcimRegionsReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRegionsReadRequest:
    path_params: DcimRegionsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimRegionsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region: Optional[shared_region.Region] = dataclasses.field(default=None)
    
