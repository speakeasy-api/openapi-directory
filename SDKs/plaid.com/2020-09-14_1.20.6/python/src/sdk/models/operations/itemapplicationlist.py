import dataclasses
from typing import Any,Optional
from ..shared import itemapplicationlistrequest as shared_itemapplicationlistrequest
from ..shared import itemapplicationlistresponse as shared_itemapplicationlistresponse


@dataclasses.dataclass
class ItemApplicationListRequest:
    request: shared_itemapplicationlistrequest.ItemApplicationListRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemApplicationListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    item_application_list_response: Optional[shared_itemapplicationlistresponse.ItemApplicationListResponse] = dataclasses.field(default=None)
    
