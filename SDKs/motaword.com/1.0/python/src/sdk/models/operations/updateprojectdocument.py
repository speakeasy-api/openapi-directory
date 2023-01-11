import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import linkedsourcedocument as shared_linkedsourcedocument
from ..shared import document as shared_document
from ..shared import error as shared_error


@dataclasses.dataclass
class UpdateProjectDocumentPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProjectDocumentRequestBodyDocuments:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    documents: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'documents' }})
    

@dataclasses.dataclass
class UpdateProjectDocumentRequestBody:
    documents: Optional[UpdateProjectDocumentRequestBodyDocuments] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    schemes: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schemes' }})
    source_link: Optional[shared_linkedsourcedocument.LinkedSourceDocument] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source-link', 'json': True }})
    

@dataclasses.dataclass
class UpdateProjectDocumentRequest:
    path_params: UpdateProjectDocumentPathParams = dataclasses.field()
    request: Optional[UpdateProjectDocumentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class UpdateProjectDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document: Optional[shared_document.Document] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
