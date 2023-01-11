import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetErrorsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetErrorsIDRequest:
    path_params: GetErrorsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetErrorsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
