import dataclasses
from typing import Optional
from ..shared import seteurekainforequest as shared_seteurekainforequest


@dataclasses.dataclass
class SetEurekaInfoRequest:
    request: shared_seteurekainforequest.SetEurekaInfoRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetEurekaInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_eureka_info_200_text_plain_object: Optional[str] = dataclasses.field(default=None)
    
