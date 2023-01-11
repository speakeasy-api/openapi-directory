import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFilesDownloadQueryParams:
    file_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fileId', 'style': 'form', 'explode': True }})
    valid_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'validSeconds', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFilesDownloadRequest:
    query_params: GetFilesDownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFilesDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
