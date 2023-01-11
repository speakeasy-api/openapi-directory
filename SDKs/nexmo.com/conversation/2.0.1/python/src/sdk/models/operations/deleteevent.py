import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteEventPathParams:
    conversation_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    event_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEventRequest:
    path_params: DeleteEventPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEventResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_event_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
