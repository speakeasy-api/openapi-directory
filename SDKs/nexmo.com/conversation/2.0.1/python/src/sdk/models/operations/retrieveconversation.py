import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channel as shared_channel
from ..shared import initiator as shared_initiator
from ..shared import member_state_enum as shared_member_state_enum
from ..shared import timestamp_res_member as shared_timestamp_res_member
from ..shared import _links_conversation as shared__links_conversation
from ..shared import timestamp_res_conversation as shared_timestamp_res_conversation


@dataclasses.dataclass
class RetrieveConversationPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveConversation200ApplicationJSONMembers:
    channel: Optional[shared_channel.Channel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    initiator: Optional[shared_initiator.Initiator] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiator') }})
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[shared_member_state_enum.MemberStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[shared_timestamp_res_member.TimestampResMember] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveConversation200ApplicationJSONProperties:
    video: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

@dataclass_json
@dataclasses.dataclass
class RetrieveConversation200ApplicationJSON:
    r"""RetrieveConversation200ApplicationJSON
    Conversation Object
    """
    
    uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    links: Optional[shared__links_conversation.LinksConversation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_key') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    members: Optional[list[RetrieveConversation200ApplicationJSONMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    numbers: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    properties: Optional[RetrieveConversation200ApplicationJSONProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sequence_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    timestamp: Optional[shared_timestamp_res_conversation.TimestampResConversation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclasses.dataclass
class RetrieveConversationRequest:
    path_params: RetrieveConversationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    retrieve_conversation_200_application_json_object: Optional[RetrieveConversation200ApplicationJSON] = dataclasses.field(default=None)
    
