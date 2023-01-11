import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetaschemasReadPathParams:
    metaschema_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'metaschema_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MetaschemasReadRequest:
    path_params: MetaschemasReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class MetaschemasReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
