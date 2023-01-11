import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import events_v1_schema_schema_version as shared_events_v1_schema_schema_version


LIST_SCHEMA_VERSION_SERVERS = [
	"https://events.twilio.com",
]


@dataclasses.dataclass
class ListSchemaVersionPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSchemaVersionQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSchemaVersionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSchemaVersionListSchemaVersionResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSchemaVersionListSchemaVersionResponse:
    meta: Optional[ListSchemaVersionListSchemaVersionResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    schema_versions: Optional[list[shared_events_v1_schema_schema_version.EventsV1SchemaSchemaVersion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema_versions') }})
    

@dataclasses.dataclass
class ListSchemaVersionRequest:
    path_params: ListSchemaVersionPathParams = dataclasses.field()
    query_params: ListSchemaVersionQueryParams = dataclasses.field()
    security: ListSchemaVersionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSchemaVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_schema_version_response: Optional[ListSchemaVersionListSchemaVersionResponse] = dataclasses.field(default=None)
    
