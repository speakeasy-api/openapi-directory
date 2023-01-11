import dataclasses
from typing import Optional


@dataclasses.dataclass
class FilesVersionsPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilesVersionsRequest:
    path_params: FilesVersionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FilesVersionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
