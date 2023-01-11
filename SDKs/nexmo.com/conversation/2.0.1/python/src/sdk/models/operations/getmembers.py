import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import member_state_enum as shared_member_state_enum


@dataclasses.dataclass
class GetMembersPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetMembers200ApplicationJSON:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: shared_member_state_enum.MemberStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    user_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_name') }})
    

@dataclasses.dataclass
class GetMembersRequest:
    path_params: GetMembersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMembersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_members_200_application_json_objects: Optional[list[GetMembers200ApplicationJSON]] = dataclasses.field(default=None)
    
