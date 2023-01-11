import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import collectdvalueerror as shared_collectdvalueerror


@dataclass_json
@dataclasses.dataclass
class CollectdPayloadError:
    r"""CollectdPayloadError
    Describes the error status for payloads that were not written.
    """
    
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    value_errors: Optional[list[shared_collectdvalueerror.CollectdValueError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueErrors') }})
    
