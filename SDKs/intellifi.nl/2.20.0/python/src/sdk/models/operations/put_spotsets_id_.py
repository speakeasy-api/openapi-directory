import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import spotsetupdate as shared_spotsetupdate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class PutSpotsetsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSpotsetsIDRequest:
    path_params: PutSpotsetsIDPathParams = dataclasses.field()
    request: shared_spotsetupdate.SpotSetUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSpotsetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
