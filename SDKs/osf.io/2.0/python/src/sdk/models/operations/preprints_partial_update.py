import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclasses.dataclass
class PreprintsPartialUpdatePathParams:
    preprint_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreprintsPartialUpdateRequest:
    path_params: PreprintsPartialUpdatePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PreprintsPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
