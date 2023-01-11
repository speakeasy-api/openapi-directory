import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import rir as shared_rir
from ..shared import rir as shared_rir


@dataclasses.dataclass
class IpamRirsPartialUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamRirsPartialUpdateRequest:
    path_params: IpamRirsPartialUpdatePathParams = dataclasses.field()
    request: shared_rir.RirInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamRirsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rir: Optional[shared_rir.Rir] = dataclasses.field(default=None)
    
