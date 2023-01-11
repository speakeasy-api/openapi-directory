import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModifyContactGroupMembersResponse:
    r"""ModifyContactGroupMembersResponse
    The response to a modify contact group members request.
    """
    
    can_not_remove_last_contact_group_resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canNotRemoveLastContactGroupResourceNames') }})
    not_found_resource_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notFoundResourceNames') }})
    
