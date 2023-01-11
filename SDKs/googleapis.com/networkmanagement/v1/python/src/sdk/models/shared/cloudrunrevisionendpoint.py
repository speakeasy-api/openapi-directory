import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CloudRunRevisionEndpoint:
    r"""CloudRunRevisionEndpoint
    Wrapper for Cloud Run revision attributes.
    """
    
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
