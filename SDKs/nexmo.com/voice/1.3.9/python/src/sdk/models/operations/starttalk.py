import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import starttalkrequest as shared_starttalkrequest
from ..shared import starttalkresponse as shared_starttalkresponse


@dataclasses.dataclass
class StartTalkPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartTalkSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StartTalkRequest:
    path_params: StartTalkPathParams = dataclasses.field()
    security: StartTalkSecurity = dataclasses.field()
    request: Optional[shared_starttalkrequest.StartTalkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartTalkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    start_talk_response: Optional[shared_starttalkresponse.StartTalkResponse] = dataclasses.field(default=None)
    
