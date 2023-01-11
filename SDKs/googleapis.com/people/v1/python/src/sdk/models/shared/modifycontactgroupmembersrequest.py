import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModifyContactGroupMembersRequest:
    r"""ModifyContactGroupMembersRequest
    A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or \"myContacts\" or \"starred\" system groups.
    """
    
    resource_names_to_add: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamesToAdd') }})
    resource_names_to_remove: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNamesToRemove') }})
    
