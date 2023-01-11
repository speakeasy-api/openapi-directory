import dataclasses
from typing import Optional


@dataclasses.dataclass
class CreateEventNotificationHeaders:
    x_fapi_financial_id: str = dataclasses.field(metadata={'header': { 'field_name': 'x-fapi-financial-id', 'style': 'simple', 'explode': False }})
    x_fapi_interaction_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-fapi-interaction-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEventNotificationRequest:
    headers: CreateEventNotificationHeaders = dataclasses.field()
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/jwt' }})
    

@dataclasses.dataclass
class CreateEventNotificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
