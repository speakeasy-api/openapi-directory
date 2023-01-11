import dataclasses
from typing import Optional
from ..shared import fileresponse as shared_fileresponse


@dataclasses.dataclass
class UploadsCreateRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class UploadsCreateRequestBody:
    file: UploadsCreateRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UploadsCreateRequest:
    request: UploadsCreateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UploadsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_response: Optional[shared_fileresponse.FileResponse] = dataclasses.field(default=None)
    
