import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class DownloadFilePathParams:
    dir: str = dataclasses.field(metadata={'path_param': { 'field_name': 'dir', 'style': 'simple', 'explode': False }})
    filename: str = dataclasses.field(metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    subdir: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subdir', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadFileQueryParams:
    download: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DownloadFileRequest:
    path_params: DownloadFilePathParams = dataclasses.field()
    query_params: DownloadFileQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    download_file_pdf_response_body: Optional[bytes] = dataclasses.field(default=None)
    download_file_png_response_body: Optional[bytes] = dataclasses.field(default=None)
    download_file_zpl_response_body: Optional[bytes] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
