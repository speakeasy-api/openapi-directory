import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import connect_app_enum_permission_enum as shared_connect_app_enum_permission_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_connect_app as shared_api_v2010_account_connect_app


UPDATE_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateConnectAppPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclasses.dataclass
class UpdateConnectAppUpdateConnectAppRequest:
    authorize_redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'AuthorizeRedirectUrl' }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CompanyName' }})
    deauthorize_callback_method: Optional[UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeauthorizeCallbackMethod' }})
    deauthorize_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DeauthorizeCallbackUrl' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Description' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    homepage_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'HomepageUrl' }})
    permissions: Optional[list[shared_connect_app_enum_permission_enum.ConnectAppEnumPermissionEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Permissions' }})
    

@dataclasses.dataclass
class UpdateConnectAppSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConnectAppRequest:
    path_params: UpdateConnectAppPathParams = dataclasses.field()
    security: UpdateConnectAppSecurity = dataclasses.field()
    request: Optional[UpdateConnectAppUpdateConnectAppRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConnectAppResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_connect_app: Optional[shared_api_v2010_account_connect_app.APIV2010AccountConnectApp] = dataclasses.field(default=None)
    
