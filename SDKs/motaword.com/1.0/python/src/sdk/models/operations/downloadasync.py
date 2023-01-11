import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadAsyncQueryParams:
    async_request_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'async_request_key', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DownloadAsyncRequest:
    query_params: DownloadAsyncQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadAsyncResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_async_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
