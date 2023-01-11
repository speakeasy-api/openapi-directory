import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BrowserBotResponse:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    elements: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    error_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    exec_results: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('execResults') }})
    http_redirect_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRedirectUrl') }})
    http_status_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatusCode') }})
    http_status_message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatusMessage') }})
    is_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isError') }})
    is_http_ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHttpOk') }})
    is_http_redirect: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHttpRedirect') }})
    is_secure: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSecure') }})
    is_timeout: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTimeout') }})
    language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    load_time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadTime') }})
    mime_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    response_headers: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeaders') }})
    security_details: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityDetails') }})
    server_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
