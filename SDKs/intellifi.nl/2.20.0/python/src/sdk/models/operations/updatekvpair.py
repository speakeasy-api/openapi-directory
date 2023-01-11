import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import keyvaluepairupdate as shared_keyvaluepairupdate
from ..shared import responsedefaultresource as shared_responsedefaultresource


@dataclasses.dataclass
class UpdateKvPairPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateKvPairRequest:
    path_params: UpdateKvPairPathParams = dataclasses.field()
    request: shared_keyvaluepairupdate.KeyValuePairUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateKvPairResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    response_default_resource: Optional[shared_responsedefaultresource.ResponseDefaultResource] = dataclasses.field(default=None)
    
