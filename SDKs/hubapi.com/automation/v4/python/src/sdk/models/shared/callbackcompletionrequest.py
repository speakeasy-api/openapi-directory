import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CallbackCompletionRequest:
    r"""CallbackCompletionRequest
    Any information to send back to Workflows when completing an action callback.
    """
    
    output_fields: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFields') }})
    
