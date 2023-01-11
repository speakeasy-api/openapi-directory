import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadRequest:
    path_params: DownloadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
