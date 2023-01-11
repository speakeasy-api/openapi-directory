import dataclasses
from typing import Optional
from ..shared import actions as shared_actions


@dataclasses.dataclass
class PostTargetActionsRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTargetActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions: Optional[list[shared_actions.Actions]] = dataclasses.field(default=None)
    
