import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import enrolledservice as shared_enrolledservice


@dataclass_json
@dataclasses.dataclass
class AccessApprovalSettingsInput:
    r"""AccessApprovalSettingsInput
    Settings on a Project/Folder/Organization related to Access Approval.
    """
    
    active_key_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeKeyVersion') }})
    enrolled_services: Optional[list[shared_enrolledservice.EnrolledService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledServices') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEmails') }})
    

@dataclass_json
@dataclasses.dataclass
class AccessApprovalSettings:
    r"""AccessApprovalSettings
    Settings on a Project/Folder/Organization related to Access Approval.
    """
    
    active_key_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeKeyVersion') }})
    ancestor_has_active_key_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ancestorHasActiveKeyVersion') }})
    enrolled_ancestor: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledAncestor') }})
    enrolled_services: Optional[list[shared_enrolledservice.EnrolledService]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrolledServices') }})
    invalid_key_version: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invalidKeyVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_emails: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationEmails') }})
    
