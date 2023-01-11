import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UploadSwaggerRequestBodySwagger:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    swagger: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'swagger' }})
    

@dataclasses.dataclass
class UploadSwaggerRequestBody:
    swagger: Optional[UploadSwaggerRequestBodySwagger] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UploadSwaggerSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UploadSwaggerRequest:
    request: UploadSwaggerRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadSwaggerSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UploadSwaggerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
