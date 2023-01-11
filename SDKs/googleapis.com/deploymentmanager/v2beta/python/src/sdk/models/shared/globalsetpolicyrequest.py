import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import binding as shared_binding
from ..shared import policy as shared_policy


@dataclass_json
@dataclasses.dataclass
class GlobalSetPolicyRequest:
    bindings: Optional[list[shared_binding.Binding]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    policy: Optional[shared_policy.Policy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
