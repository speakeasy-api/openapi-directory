import dataclasses
from typing import Optional
from ..shared import writableservice as shared_writableservice
from ..shared import service as shared_service


@dataclasses.dataclass
class IpamServicesCreateRequest:
    request: shared_writableservice.WritableServiceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamServicesCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
