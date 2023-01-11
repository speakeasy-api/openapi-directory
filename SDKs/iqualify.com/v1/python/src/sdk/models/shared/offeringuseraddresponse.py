import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import invite as shared_invite
from ..shared import usermetadata as shared_usermetadata
from ..shared import userprofilerequest as shared_userprofilerequest


@dataclass_json
@dataclasses.dataclass
class OfferingUserAddResponse:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    invite: Optional[shared_invite.Invite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invite') }})
    is_facilitator: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFacilitator') }})
    is_marker: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMarker') }})
    is_readonly: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReadonly') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    metadata: Optional[shared_usermetadata.UserMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    person_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personId') }})
    profile: Optional[shared_userprofilerequest.UserProfileRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    send_invite: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendInvite') }})
    send_notification_email: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendNotificationEmail') }})
    
