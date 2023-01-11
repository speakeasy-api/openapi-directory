import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import demotemastercontext as shared_demotemastercontext


@dataclass_json
@dataclasses.dataclass
class InstancesDemoteMasterRequest:
    r"""InstancesDemoteMasterRequest
    Database demote primary instance request.
    """
    
    demote_master_context: Optional[shared_demotemastercontext.DemoteMasterContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demoteMasterContext') }})
    
