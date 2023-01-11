import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any


@dataclasses.dataclass
class NodesPartialUpdatePathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NodesPartialUpdateRequest:
    path_params: NodesPartialUpdatePathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class NodesPartialUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
