import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class URLInfoResponse:
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    content_encoding: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentEncoding') }})
    content_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentSize') }})
    content_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    http_ok: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpOk') }})
    http_redirect: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRedirect') }})
    http_status: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    http_status_message: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatusMessage') }})
    is_error: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isError') }})
    is_timeout: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isTimeout') }})
    language_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    load_time: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('loadTime') }})
    query: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    real: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('real') }})
    server_city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCity') }})
    server_country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCountry') }})
    server_country_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverCountryCode') }})
    server_hostname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverHostname') }})
    server_ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverIp') }})
    server_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverName') }})
    server_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverRegion') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPath') }})
    url_port: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlPort') }})
    url_protocol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlProtocol') }})
    valid: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
