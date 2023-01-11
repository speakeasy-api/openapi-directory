import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entrypointparameter as shared_entrypointparameter

class EntryPointHTTPMethodEnum(str, Enum):
    GET = "GET"
    PUT = "PUT"
    POST = "POST"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class EntryPoint:
    content_types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_types') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encoding_types: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding_types') }})
    http_method: EntryPointHTTPMethodEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('http_method') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: list[shared_entrypointparameter.EntryPointParameter] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    url_template: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url_template') }})
    
