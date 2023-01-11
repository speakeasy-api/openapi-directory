import dataclasses
from typing import Any,Optional
from ..shared import itemremoverequest as shared_itemremoverequest


@dataclasses.dataclass
class ItemRemoveRequest:
    request: shared_itemremoverequest.ItemRemoveRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemRemoveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    item_remove_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
