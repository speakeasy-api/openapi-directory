import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import controllers_systemdetailresponse as shared_controllers_systemdetailresponse


@dataclasses.dataclass
class DetailSystemPathParams:
    inventory_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'inventory_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DetailSystemSecurity:
    rh_identity: shared_security.SchemeRhIdentity = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DetailSystemRequest:
    path_params: DetailSystemPathParams = dataclasses.field()
    security: DetailSystemSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DetailSystemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    controllers_system_detail_response: Optional[shared_controllers_systemdetailresponse.ControllersSystemDetailResponse] = dataclasses.field(default=None)
    
