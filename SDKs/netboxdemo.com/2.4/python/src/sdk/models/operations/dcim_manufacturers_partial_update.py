import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import manufacturer as shared_manufacturer
from ..shared import manufacturer as shared_manufacturer


@dataclasses.dataclass
class DcimManufacturersPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimManufacturersPartialUpdateRequest:
    path_params: DcimManufacturersPartialUpdatePathParams = dataclasses.field()
    request: shared_manufacturer.ManufacturerInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimManufacturersPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    manufacturer: Optional[shared_manufacturer.Manufacturer] = dataclasses.field(default=None)
    
