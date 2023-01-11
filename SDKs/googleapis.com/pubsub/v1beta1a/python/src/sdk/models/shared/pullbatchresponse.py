import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import pullresponse as shared_pullresponse


@dataclass_json
@dataclasses.dataclass
class PullBatchResponse:
    r"""PullBatchResponse
    Response for the PullBatch method.
    """
    
    pull_responses: Optional[list[shared_pullresponse.PullResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullResponses') }})
    
