import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import patch as shared_patch
from ..shared import target as shared_target


@dataclasses.dataclass
class UpdateServiceTargetsPathParams:
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceTargetsSecurity:
    otoroshi_auth: shared_security.SchemeOtoroshiAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceTargetsRequest:
    path_params: UpdateServiceTargetsPathParams = dataclasses.field()
    security: UpdateServiceTargetsSecurity = dataclasses.field()
    request: Optional[list[shared_patch.Patch]] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateServiceTargetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    targets: Optional[list[shared_target.Target]] = dataclasses.field(default=None)
    
