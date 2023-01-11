import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_schema as shared_events_v1_schema


FETCH_SCHEMA_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchSchemaPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSchemaSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSchemaRequest:
    path_params: FetchSchemaPathParams = dataclasses.field()
    security: FetchSchemaSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSchemaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_schema: Optional[shared_events_v1_schema.EventsV1Schema] = dataclasses.field(default=None)
    
