import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pollingoptions as shared_pollingoptions


@dataclass_json
@dataclasses.dataclass
class AsyncOptions:
    r"""AsyncOptions
    Async options that determine when a resource should finish.
    """
    
    method_match: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodMatch') }})
    polling_options: Optional[shared_pollingoptions.PollingOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingOptions') }})
    
