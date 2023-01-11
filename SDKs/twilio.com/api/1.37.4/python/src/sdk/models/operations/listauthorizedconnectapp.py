import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_authorized_connect_app as shared_api_v2010_account_authorized_connect_app


LIST_AUTHORIZED_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListAuthorizedConnectAppPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAuthorizedConnectAppQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAuthorizedConnectAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAuthorizedConnectAppListAuthorizedConnectAppResponse:
    authorized_connect_apps: Optional[list[shared_api_v2010_account_authorized_connect_app.APIV2010AccountAuthorizedConnectApp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_connect_apps') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListAuthorizedConnectAppRequest:
    path_params: ListAuthorizedConnectAppPathParams = dataclasses.field()
    query_params: ListAuthorizedConnectAppQueryParams = dataclasses.field()
    security: ListAuthorizedConnectAppSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAuthorizedConnectAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_authorized_connect_app_response: Optional[ListAuthorizedConnectAppListAuthorizedConnectAppResponse] = dataclasses.field(default=None)
    
