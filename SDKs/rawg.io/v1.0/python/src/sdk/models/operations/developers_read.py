import dataclasses
from typing import Optional
from ..shared import developersingle as shared_developersingle


@dataclasses.dataclass
class DevelopersReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DevelopersReadRequest:
    path_params: DevelopersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DevelopersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    developer_single: Optional[shared_developersingle.DeveloperSingle] = dataclasses.field(default=None)
    
