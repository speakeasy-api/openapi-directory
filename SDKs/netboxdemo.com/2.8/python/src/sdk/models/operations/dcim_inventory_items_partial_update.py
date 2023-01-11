import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableinventoryitem as shared_writableinventoryitem
from ..shared import inventoryitem as shared_inventoryitem


@dataclasses.dataclass
class DcimInventoryItemsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimInventoryItemsPartialUpdateRequest:
    path_params: DcimInventoryItemsPartialUpdatePathParams = dataclasses.field()
    request: shared_writableinventoryitem.WritableInventoryItemInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimInventoryItemsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inventory_item: Optional[shared_inventoryitem.InventoryItem] = dataclasses.field(default=None)
    
