import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createassignedtargetingoptionsrequest as shared_createassignedtargetingoptionsrequest
from ..shared import deleteassignedtargetingoptionsrequest as shared_deleteassignedtargetingoptionsrequest


@dataclass_json
@dataclasses.dataclass
class BulkEditAdvertiserAssignedTargetingOptionsRequestInput:
    r"""BulkEditAdvertiserAssignedTargetingOptionsRequestInput
    Request message for BulkEditAdvertiserAssignedTargetingOptions.
    """
    
    create_requests: Optional[list[shared_createassignedtargetingoptionsrequest.CreateAssignedTargetingOptionsRequestInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createRequests') }})
    delete_requests: Optional[list[shared_deleteassignedtargetingoptionsrequest.DeleteAssignedTargetingOptionsRequest]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteRequests') }})
    
