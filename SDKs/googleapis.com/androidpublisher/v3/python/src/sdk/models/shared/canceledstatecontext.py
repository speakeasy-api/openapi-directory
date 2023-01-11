import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userinitiatedcancellation as shared_userinitiatedcancellation


@dataclass_json
@dataclasses.dataclass
class CanceledStateContext:
    r"""CanceledStateContext
    Information specific to a subscription in canceled state.
    """
    
    developer_initiated_cancellation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerInitiatedCancellation') }})
    replacement_cancellation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementCancellation') }})
    system_initiated_cancellation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemInitiatedCancellation') }})
    user_initiated_cancellation: Optional[shared_userinitiatedcancellation.UserInitiatedCancellation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInitiatedCancellation') }})
    
