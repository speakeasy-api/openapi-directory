import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceinventory as shared_serviceinventory


@dataclasses.dataclass
class ShowServiceInventoryPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceInventoryRequest:
    path_params: ShowServiceInventoryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceInventoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_inventory: Optional[shared_serviceinventory.ServiceInventory] = dataclasses.field(default=None)
    
