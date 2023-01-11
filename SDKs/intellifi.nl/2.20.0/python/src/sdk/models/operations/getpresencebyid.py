import dataclasses
from typing import Optional
from ..shared import presence as shared_presence


@dataclasses.dataclass
class GetPresenceByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPresenceByIDRequest:
    path_params: GetPresenceByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPresenceByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    presence: Optional[shared_presence.Presence] = dataclasses.field(default=None)
    
