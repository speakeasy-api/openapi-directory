import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import completionresult as shared_completionresult
from ..shared import responsemetadata as shared_responsemetadata


@dataclass_json
@dataclasses.dataclass
class CompleteQueryResponse:
    r"""CompleteQueryResponse
    Response of auto-complete query.
    """
    
    completion_results: Optional[list[shared_completionresult.CompletionResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionResults') }})
    metadata: Optional[shared_responsemetadata.ResponseMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
