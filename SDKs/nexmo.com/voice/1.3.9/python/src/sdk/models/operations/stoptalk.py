import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import stoptalkresponse as shared_stoptalkresponse


@dataclasses.dataclass
class StopTalkPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopTalkSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StopTalkRequest:
    path_params: StopTalkPathParams = dataclasses.field()
    security: StopTalkSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StopTalkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_talk_response: Optional[shared_stoptalkresponse.StopTalkResponse] = dataclasses.field(default=None)
    
