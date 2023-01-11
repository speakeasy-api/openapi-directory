import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import manufacturer as shared_manufacturer
from ..shared import manufacturer as shared_manufacturer


@dataclasses.dataclass
class DcimManufacturersUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimManufacturersUpdateRequest:
    path_params: DcimManufacturersUpdatePathParams = dataclasses.field()
    request: shared_manufacturer.ManufacturerInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimManufacturersUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    manufacturer: Optional[shared_manufacturer.Manufacturer] = dataclasses.field(default=None)
    
