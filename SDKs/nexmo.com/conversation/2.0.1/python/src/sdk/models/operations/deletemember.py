import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteMemberPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    member_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteMemberRequest:
    path_params: DeleteMemberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_member_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
