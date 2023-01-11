import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactgroup as shared_contactgroup
from ..shared import status as shared_status


@dataclass_json
@dataclasses.dataclass
class ContactGroupResponse:
    r"""ContactGroupResponse
    The response for a specific contact group.
    """
    
    contact_group: Optional[shared_contactgroup.ContactGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    requested_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedResourceName') }})
    status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
