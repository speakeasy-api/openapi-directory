import dataclasses
from typing import Optional
from ..shared import driver as shared_driver


@dataclasses.dataclass
class PutDriversIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutDriversIDRequest:
    path_params: PutDriversIDPathParams = dataclasses.field()
    request: shared_driver.Driver = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutDriversIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    driver: Optional[shared_driver.Driver] = dataclasses.field(default=None)
    
