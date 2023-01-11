import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clonecontext as shared_clonecontext


@dataclass_json
@dataclasses.dataclass
class InstancesCloneRequest:
    r"""InstancesCloneRequest
    Database instance clone request.
    """
    
    clone_context: Optional[shared_clonecontext.CloneContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneContext') }})
    
