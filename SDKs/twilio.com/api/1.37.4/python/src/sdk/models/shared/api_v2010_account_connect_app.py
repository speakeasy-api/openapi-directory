import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import connect_app_enum_permission_enum as shared_connect_app_enum_permission_enum

class APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class APIV2010AccountConnectApp:
    account_sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    authorize_redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorize_redirect_url') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_name') }})
    deauthorize_callback_method: Optional[APIV2010AccountConnectAppDeauthorizeCallbackMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deauthorize_callback_method') }})
    deauthorize_callback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deauthorize_callback_url') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    homepage_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage_url') }})
    permissions: Optional[list[shared_connect_app_enum_permission_enum.ConnectAppEnumPermissionEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    sid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
