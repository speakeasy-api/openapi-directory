import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PushConfig:
    r"""PushConfig
    Configuration for a push delivery endpoint.
    """
    
    push_endpoint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushEndpoint') }})
    
