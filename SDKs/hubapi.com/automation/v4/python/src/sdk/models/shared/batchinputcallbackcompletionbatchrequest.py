import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import callbackcompletionbatchrequest as shared_callbackcompletionbatchrequest


@dataclass_json
@dataclasses.dataclass
class BatchInputCallbackCompletionBatchRequest:
    inputs: list[shared_callbackcompletionbatchrequest.CallbackCompletionBatchRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputs') }})
    
