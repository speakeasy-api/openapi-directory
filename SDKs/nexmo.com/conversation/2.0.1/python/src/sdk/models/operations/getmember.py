import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetMemberPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMemberRequest:
    path_params: GetMemberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_member_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
