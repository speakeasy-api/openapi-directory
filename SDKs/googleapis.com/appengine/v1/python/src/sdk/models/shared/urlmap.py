import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apiendpointhandler as shared_apiendpointhandler
from ..shared import scripthandler as shared_scripthandler
from ..shared import staticfileshandler as shared_staticfileshandler

class URLMapAuthFailActionEnum(str, Enum):
    AUTH_FAIL_ACTION_UNSPECIFIED = "AUTH_FAIL_ACTION_UNSPECIFIED"
    AUTH_FAIL_ACTION_REDIRECT = "AUTH_FAIL_ACTION_REDIRECT"
    AUTH_FAIL_ACTION_UNAUTHORIZED = "AUTH_FAIL_ACTION_UNAUTHORIZED"

class URLMapLoginEnum(str, Enum):
    LOGIN_UNSPECIFIED = "LOGIN_UNSPECIFIED"
    LOGIN_OPTIONAL = "LOGIN_OPTIONAL"
    LOGIN_ADMIN = "LOGIN_ADMIN"
    LOGIN_REQUIRED = "LOGIN_REQUIRED"

class URLMapRedirectHTTPResponseCodeEnum(str, Enum):
    REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED"
    REDIRECT_HTTP_RESPONSE_CODE_301 = "REDIRECT_HTTP_RESPONSE_CODE_301"
    REDIRECT_HTTP_RESPONSE_CODE_302 = "REDIRECT_HTTP_RESPONSE_CODE_302"
    REDIRECT_HTTP_RESPONSE_CODE_303 = "REDIRECT_HTTP_RESPONSE_CODE_303"
    REDIRECT_HTTP_RESPONSE_CODE_307 = "REDIRECT_HTTP_RESPONSE_CODE_307"

class URLMapSecurityLevelEnum(str, Enum):
    SECURE_UNSPECIFIED = "SECURE_UNSPECIFIED"
    SECURE_DEFAULT = "SECURE_DEFAULT"
    SECURE_NEVER = "SECURE_NEVER"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"
    SECURE_ALWAYS = "SECURE_ALWAYS"


@dataclass_json
@dataclasses.dataclass
class URLMap:
    r"""URLMap
    URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript.
    """
    
    api_endpoint: Optional[shared_apiendpointhandler.APIEndpointHandler] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiEndpoint') }})
    auth_fail_action: Optional[URLMapAuthFailActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authFailAction') }})
    login: Optional[URLMapLoginEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    redirect_http_response_code: Optional[URLMapRedirectHTTPResponseCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectHttpResponseCode') }})
    script: Optional[shared_scripthandler.ScriptHandler] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    security_level: Optional[URLMapSecurityLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    static_files: Optional[shared_staticfileshandler.StaticFilesHandler] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('staticFiles') }})
    url_regex: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRegex') }})
    
