import dataclasses
from typing import Optional
from ..shared import itemlist as shared_itemlist
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class AddSpotListRequest:
    request: shared_itemlist.ItemListInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddSpotListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
