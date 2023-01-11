import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UploadAPISpecificationHeaders:
    x_readme_version: str = dataclasses.field(metadata={'header': { 'field_name': 'x-readme-version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadAPISpecificationRequestBodySpec:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    spec: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'spec' }})
    

@dataclasses.dataclass
class UploadAPISpecificationRequestBody:
    spec: Optional[UploadAPISpecificationRequestBodySpec] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class UploadAPISpecificationSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UploadAPISpecificationRequest:
    headers: UploadAPISpecificationHeaders = dataclasses.field()
    request: UploadAPISpecificationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: UploadAPISpecificationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class UploadAPISpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
