import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sandboxuser as shared_sandboxuser


@dataclass_json
@dataclasses.dataclass
class Sandbox:
    r"""Sandbox
    Sandbox model
    """
    
    sandbox_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandboxId') }})
    users: Optional[list[shared_sandboxuser.SandboxUser]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
