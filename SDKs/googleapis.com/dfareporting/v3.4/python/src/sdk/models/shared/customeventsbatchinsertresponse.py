import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customeventstatus as shared_customeventstatus


@dataclass_json
@dataclasses.dataclass
class CustomEventsBatchInsertResponse:
    r"""CustomEventsBatchInsertResponse
    Insert Custom Events Response.
    """
    
    has_failures: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFailures') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    status: Optional[list[shared_customeventstatus.CustomEventStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
