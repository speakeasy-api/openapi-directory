import dataclasses
from typing import Any,Optional
from ..shared import itemimportrequest as shared_itemimportrequest


@dataclasses.dataclass
class ItemImportRequest:
    request: shared_itemimportrequest.ItemImportRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ItemImportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    item_import_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
