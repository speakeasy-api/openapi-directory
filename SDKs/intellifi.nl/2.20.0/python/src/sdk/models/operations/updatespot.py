import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import spotupdate as shared_spotupdate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class UpdateSpotPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSpotRequest:
    path_params: UpdateSpotPathParams = dataclasses.field()
    request: shared_spotupdate.SpotUpdateInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSpotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
