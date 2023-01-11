import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import headeroverride as shared_headeroverride
from ..shared import oauthtoken as shared_oauthtoken
from ..shared import oidctoken as shared_oidctoken
from ..shared import urioverride as shared_urioverride

class HTTPTargetHTTPMethodEnum(str, Enum):
    HTTP_METHOD_UNSPECIFIED = "HTTP_METHOD_UNSPECIFIED"
    POST = "POST"
    GET = "GET"
    HEAD = "HEAD"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
    OPTIONS = "OPTIONS"


@dataclass_json
@dataclasses.dataclass
class HTTPTarget:
    r"""HTTPTarget
    HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
    """
    
    header_overrides: Optional[list[shared_headeroverride.HeaderOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headerOverrides') }})
    http_method: Optional[HTTPTargetHTTPMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    oauth_token: Optional[shared_oauthtoken.OAuthToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthToken') }})
    oidc_token: Optional[shared_oidctoken.OidcToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oidcToken') }})
    uri_override: Optional[shared_urioverride.URIOverride] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uriOverride') }})
    
