import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import stopstreamresponse as shared_stopstreamresponse


@dataclasses.dataclass
class StopStreamPathParams:
    uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopStreamSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class StopStreamRequest:
    path_params: StopStreamPathParams = dataclasses.field()
    security: StopStreamSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StopStreamResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    stop_stream_response: Optional[shared_stopstreamresponse.StopStreamResponse] = dataclasses.field(default=None)
    
