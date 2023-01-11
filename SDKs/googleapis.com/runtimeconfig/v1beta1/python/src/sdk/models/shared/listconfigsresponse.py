import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeconfig as shared_runtimeconfig


@dataclass_json
@dataclasses.dataclass
class ListConfigsResponse:
    r"""ListConfigsResponse
    `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
    """
    
    configs: Optional[list[shared_runtimeconfig.RuntimeConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
