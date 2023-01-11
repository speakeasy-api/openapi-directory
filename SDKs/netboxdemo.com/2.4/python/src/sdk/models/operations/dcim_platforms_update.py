import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import writableplatform as shared_writableplatform
from ..shared import platform as shared_platform


@dataclasses.dataclass
class DcimPlatformsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DcimPlatformsUpdateRequest:
    path_params: DcimPlatformsUpdatePathParams = dataclasses.field()
    request: shared_writableplatform.WritablePlatformInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DcimPlatformsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    platform: Optional[shared_platform.Platform] = dataclasses.field(default=None)
    
