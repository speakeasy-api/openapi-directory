import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cancellationreason as shared_cancellationreason


@dataclass_json
@dataclasses.dataclass
class CancellationReasonsResponse:
    reasons: Optional[list[shared_cancellationreason.CancellationReason]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasons') }})
    
