import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StreamingConfig:
    r"""StreamingConfig
    The config for streaming-based notifications, which send each event as soon as it is detected.
    """
    
    filter: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
