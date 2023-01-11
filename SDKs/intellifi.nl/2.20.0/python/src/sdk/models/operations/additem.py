import dataclasses
from typing import Optional
from ..shared import item as shared_item
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddItemRequest:
    request: shared_item.ItemInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddItemResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
