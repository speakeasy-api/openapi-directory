import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import dtmfrequest as shared_dtmfrequest
from ..shared import dtmfresponse as shared_dtmfresponse


@dataclasses.dataclass
class StartDtmfPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartDtmfSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StartDtmfRequest:
    path_params: StartDtmfPathParams = dataclasses.field()
    request: shared_dtmfrequest.DtmfRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartDtmfSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StartDtmfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dtmf_response: Optional[shared_dtmfresponse.DtmfResponse] = dataclasses.field(default=None)
    
