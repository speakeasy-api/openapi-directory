import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableservice as shared_writableservice
from ..shared import service as shared_service


@dataclasses.dataclass
class IpamServicesUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IpamServicesUpdateRequest:
    path_params: IpamServicesUpdatePathParams = dataclasses.field()
    request: shared_writableservice.WritableServiceInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class IpamServicesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service: Optional[shared_service.Service] = dataclasses.field(default=None)
    
