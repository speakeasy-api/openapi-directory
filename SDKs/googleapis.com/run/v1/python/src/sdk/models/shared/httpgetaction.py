import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httpheader as shared_httpheader


@dataclass_json
@dataclasses.dataclass
class HTTPGetAction:
    r"""HTTPGetAction
    HTTPGetAction describes an action based on HTTP Get requests.
    """
    
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    http_headers: Optional[list[shared_httpheader.HTTPHeader]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaders') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    scheme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
