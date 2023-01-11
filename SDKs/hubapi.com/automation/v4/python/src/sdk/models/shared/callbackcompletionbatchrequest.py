import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CallbackCompletionBatchRequest:
    r"""CallbackCompletionBatchRequest
    Any information to send back to Workflows when completing an action callback as part of a batch request.
    """
    
    callback_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackId') }})
    output_fields: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFields') }})
    
