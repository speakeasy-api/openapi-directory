import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_connect_app as shared_api_v2010_account_connect_app


LIST_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListConnectAppPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConnectAppQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConnectAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectAppListConnectAppResponse:
    connect_apps: Optional[list[shared_api_v2010_account_connect_app.APIV2010AccountConnectApp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connect_apps') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListConnectAppRequest:
    path_params: ListConnectAppPathParams = dataclasses.field()
    query_params: ListConnectAppQueryParams = dataclasses.field()
    security: ListConnectAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConnectAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_connect_app_response: Optional[ListConnectAppListConnectAppResponse] = dataclasses.field(default=None)
    
