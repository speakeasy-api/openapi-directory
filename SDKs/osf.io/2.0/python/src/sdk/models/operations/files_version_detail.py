import dataclasses
from typing import Optional


@dataclasses.dataclass
class FilesVersionDetailPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilesVersionDetailRequest:
    path_params: FilesVersionDetailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class FilesVersionDetailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
