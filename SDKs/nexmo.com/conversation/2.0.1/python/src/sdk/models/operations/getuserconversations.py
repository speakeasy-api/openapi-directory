import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member_state_enum as shared_member_state_enum


@dataclasses.dataclass
class GetuserConversationsPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetuserConversations200ApplicationJSONTimestamp:
    created: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    

@dataclass_json
@dataclasses.dataclass
class GetuserConversations200ApplicationJSON:
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    href: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_url') }})
    member_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sequence_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequence_number') }})
    state: Optional[shared_member_state_enum.MemberStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    timestamp: Optional[GetuserConversations200ApplicationJSONTimestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclasses.dataclass
class GetuserConversationsRequest:
    path_params: GetuserConversationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetuserConversationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    getuser_conversations_200_application_json_objects: Optional[list[GetuserConversations200ApplicationJSON]] = dataclasses.field(default=None)
    
