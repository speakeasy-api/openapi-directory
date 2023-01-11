import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member_action_enum as shared_member_action_enum
from ..shared import channel as shared_channel
from ..shared import initiator as shared_initiator
from ..shared import member_state_enum as shared_member_state_enum
from ..shared import timestamp_res_member as shared_timestamp_res_member


@dataclasses.dataclass
class CreateMemberPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMemberRequestBody:
    r"""CreateMemberRequestBody
    Create a Member in invite state 
    """
    
    channel: shared_channel.Channel = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    action: Optional[shared_member_action_enum.MemberActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    knocking_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knocking_id') }})
    media: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    member_id_inviting: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id_inviting') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMember201ApplicationJSON:
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    initiator: Optional[shared_initiator.Initiator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    state: Optional[shared_member_state_enum.MemberStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[shared_timestamp_res_member.TimestampResMember] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclasses.dataclass
class CreateMemberRequest:
    path_params: CreateMemberPathParams = dataclasses.field()
    request: Optional[CreateMemberRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_member_201_application_json_object: Optional[CreateMember201ApplicationJSON] = dataclasses.field(default=None)
    
