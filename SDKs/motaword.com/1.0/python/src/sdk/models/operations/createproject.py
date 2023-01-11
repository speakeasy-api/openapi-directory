import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import project as shared_project


@dataclasses.dataclass
class CreateProjectRequestBodyDocuments:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    documents_: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'documents[]' }})
    

@dataclasses.dataclass
class CreateProjectRequestBodyGlossaries:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    glossaries_: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'glossaries[]' }})
    

@dataclasses.dataclass
class CreateProjectRequestBodyStyleguides:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    styleguides_: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'styleguides[]' }})
    

@dataclasses.dataclass
class CreateProjectRequestBody:
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'callback_url' }})
    coupon_code: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'coupon_code' }})
    custom: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'custom', 'json': True }})
    documents_: Optional[CreateProjectRequestBodyDocuments] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    glossaries_: Optional[CreateProjectRequestBodyGlossaries] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    source_language: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source_language' }})
    styleguides_: Optional[CreateProjectRequestBodyStyleguides] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    target_languages_: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'target_languages[]', 'json': True }})
    

@dataclasses.dataclass
class CreateProjectRequest:
    request: Optional[CreateProjectRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateProjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    project: Optional[shared_project.Project] = dataclasses.field(default=None)
    
