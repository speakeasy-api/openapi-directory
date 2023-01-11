import dataclasses
from typing import Optional
from ..shared import manufacturer as shared_manufacturer


@dataclasses.dataclass
class DcimManufacturersReadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimManufacturersReadRequest:
    path_params: DcimManufacturersReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DcimManufacturersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    manufacturer: Optional[shared_manufacturer.Manufacturer] = dataclasses.field(default=None)
    
