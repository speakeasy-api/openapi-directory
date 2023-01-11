import dataclasses
from typing import Optional
from ..shared import storesingle as shared_storesingle


@dataclasses.dataclass
class StoresReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StoresReadRequest:
    path_params: StoresReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class StoresReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_single: Optional[shared_storesingle.StoreSingle] = dataclasses.field(default=None)
    
