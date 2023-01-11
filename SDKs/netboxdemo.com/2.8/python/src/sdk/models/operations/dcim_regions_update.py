import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableregion as shared_writableregion
from ..shared import region as shared_region


@dataclasses.dataclass
class DcimRegionsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimRegionsUpdateRequest:
    path_params: DcimRegionsUpdatePathParams = dataclasses.field()
    request: shared_writableregion.WritableRegionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimRegionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    region: Optional[shared_region.Region] = dataclasses.field(default=None)
    
