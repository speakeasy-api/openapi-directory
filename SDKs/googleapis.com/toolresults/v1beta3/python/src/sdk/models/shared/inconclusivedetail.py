import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class InconclusiveDetail:
    r"""InconclusiveDetail
    Details for an outcome with an INCONCLUSIVE outcome summary.
    """
    
    aborted_by_user: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortedByUser') }})
    has_error_logs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasErrorLogs') }})
    infrastructure_failure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureFailure') }})
    
