import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import startstreamrequest as shared_startstreamrequest
from ..shared import startstreamresponse as shared_startstreamresponse


@dataclasses.dataclass
class StartStreamPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartStreamSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StartStreamRequest:
    path_params: StartStreamPathParams = dataclasses.field()
    request: shared_startstreamrequest.StartStreamRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartStreamSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StartStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    start_stream_response: Optional[shared_startstreamresponse.StartStreamResponse] = dataclasses.field(default=None)
    
