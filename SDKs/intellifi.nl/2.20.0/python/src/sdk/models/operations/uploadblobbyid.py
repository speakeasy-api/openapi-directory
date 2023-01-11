import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class UploadBlobByIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadBlobByIDRequest:
    path_params: UploadBlobByIDPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadBlobByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
