import dataclasses
from typing import Optional
from ..shared import action as shared_action


@dataclasses.dataclass
class PostBillingActionsRequest:
    request: list[str] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostBillingActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action: Optional[shared_action.Action] = dataclasses.field(default=None)
    
