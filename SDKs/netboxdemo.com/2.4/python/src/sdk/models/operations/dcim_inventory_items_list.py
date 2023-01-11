import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inventoryitem as shared_inventoryitem


@dataclasses.dataclass
class DcimInventoryItemsListQueryParams:
    asset_tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'asset_tag', 'style': 'form', 'explode': True }})
    device: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    discovered: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'discovered', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    manufacturer: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer', 'style': 'form', 'explode': True }})
    manufacturer_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manufacturer_id', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent_id', 'style': 'form', 'explode': True }})
    part_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'part_id', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'serial', 'style': 'form', 'explode': True }})
    tag: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class DcimInventoryItemsList200ApplicationJSON:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: list[shared_inventoryitem.InventoryItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class DcimInventoryItemsListRequest:
    query_params: DcimInventoryItemsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimInventoryItemsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dcim_inventory_items_list_200_application_json_object: Optional[DcimInventoryItemsList200ApplicationJSON] = dataclasses.field(default=None)
    
