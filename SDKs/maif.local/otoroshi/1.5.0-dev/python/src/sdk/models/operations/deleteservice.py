import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import deleted as shared_deleted


@dataclasses.dataclass
class DeleteServicePathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteServiceRequest:
    path_params: DeleteServicePathParams = dataclasses.field()
    security: DeleteServiceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deleted: Optional[shared_deleted.Deleted] = dataclasses.field(default=None)
    
