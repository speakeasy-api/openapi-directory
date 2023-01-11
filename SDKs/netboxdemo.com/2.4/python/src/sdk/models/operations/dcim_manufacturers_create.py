import dataclasses
from typing import Optional
from ..shared import manufacturer as shared_manufacturer
from ..shared import manufacturer as shared_manufacturer


@dataclasses.dataclass
class DcimManufacturersCreateRequest:
    request: shared_manufacturer.ManufacturerInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimManufacturersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    manufacturer: Optional[shared_manufacturer.Manufacturer] = dataclasses.field(default=None)
    
