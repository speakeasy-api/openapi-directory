import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteConversationPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConversationRequest:
    path_params: DeleteConversationPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_conversation_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
