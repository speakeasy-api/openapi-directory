import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class UpdateAdministrationPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    legal_entity_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'legal_entity_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAdministrationRequest:
    path_params: UpdateAdministrationPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAdministrationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    administration: Optional[Any] = dataclasses.field(default=None)
    
