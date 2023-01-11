import dataclasses
from typing import Optional
from ..shared import driver as shared_driver


@dataclasses.dataclass
class PostDriversRequest:
    request: shared_driver.Driver = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostDriversResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    driver: Optional[shared_driver.Driver] = dataclasses.field(default=None)
    
