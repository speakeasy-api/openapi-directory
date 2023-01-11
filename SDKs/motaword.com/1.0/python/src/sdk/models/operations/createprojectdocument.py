import dataclasses
from typing import Optional
from ..shared import linkedsourcedocument as shared_linkedsourcedocument
from ..shared import documentlist as shared_documentlist
from ..shared import error as shared_error


@dataclasses.dataclass
class CreateProjectDocumentPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProjectDocumentRequestBody:
    documents_: Optional[list[bytes]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'documents[]', 'json': True }})
    schemes_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'schemes[]' }})
    source_links_: Optional[list[shared_linkedsourcedocument.LinkedSourceDocument]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'source-links[]', 'json': True }})
    

@dataclasses.dataclass
class CreateProjectDocumentRequest:
    path_params: CreateProjectDocumentPathParams = dataclasses.field()
    request: Optional[CreateProjectDocumentRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class CreateProjectDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document_list: Optional[shared_documentlist.DocumentList] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
