import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import events_v1_schema_schema_version as shared_events_v1_schema_schema_version


FETCH_SCHEMA_VERSION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class FetchSchemaVersionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    schema_version: int = dataclasses.field(metadata={'path_param': { 'field_name': 'SchemaVersion', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSchemaVersionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSchemaVersionRequest:
    path_params: FetchSchemaVersionPathParams = dataclasses.field()
    security: FetchSchemaVersionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSchemaVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    events_v1_schema_schema_version: Optional[shared_events_v1_schema_schema_version.EventsV1SchemaSchemaVersion] = dataclasses.field(default=None)
    
