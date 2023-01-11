import dataclasses
from typing import Optional


@dataclasses.dataclass
class PreprintsCitationListPathParams:
    preprint_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreprintsCitationListRequest:
    path_params: PreprintsCitationListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PreprintsCitationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
