import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelprofiledetails as shared_channelprofiledetails
from ..shared import membershipsdetails as shared_membershipsdetails


@dataclass_json
@dataclasses.dataclass
class MemberSnippet:
    creator_channel_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorChannelId') }})
    member_details: Optional[shared_channelprofiledetails.ChannelProfileDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberDetails') }})
    memberships_details: Optional[shared_membershipsdetails.MembershipsDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipsDetails') }})
    
