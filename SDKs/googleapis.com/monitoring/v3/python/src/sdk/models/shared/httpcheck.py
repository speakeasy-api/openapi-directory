import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responsestatuscode as shared_responsestatuscode
from ..shared import basicauthentication as shared_basicauthentication
from ..shared import pingconfig as shared_pingconfig

class HTTPCheckContentTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    URL_ENCODED = "URL_ENCODED"

class HTTPCheckRequestMethodEnum(str, Enum):
    METHOD_UNSPECIFIED = "METHOD_UNSPECIFIED"
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclasses.dataclass
class HTTPCheck:
    r"""HTTPCheck
    Information involved in an HTTP/HTTPS Uptime check request.
    """
    
    accepted_response_status_codes: Optional[list[shared_responsestatuscode.ResponseStatusCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedResponseStatusCodes') }})
    auth_info: Optional[shared_basicauthentication.BasicAuthentication] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authInfo') }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    content_type: Optional[HTTPCheckContentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    headers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    mask_headers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maskHeaders') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    ping_config: Optional[shared_pingconfig.PingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pingConfig') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    request_method: Optional[HTTPCheckRequestMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMethod') }})
    use_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useSsl') }})
    validate_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateSsl') }})
    
