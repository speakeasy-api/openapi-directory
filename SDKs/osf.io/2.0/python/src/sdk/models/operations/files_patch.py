import dataclasses
from typing import Any


@dataclasses.dataclass
class FilesPatchPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilesPatchRequest:
    path_params: FilesPatchPathParams = dataclasses.field()
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class FilesPatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
