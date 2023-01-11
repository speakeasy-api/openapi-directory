import dataclasses
from typing import Optional
from enum import Enum
from ..shared import document as shared_document
from ..shared import error as shared_error


@dataclasses.dataclass
class GetProjectDocumentPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    
class GetProjectDocumentWithEnum(str, Enum):
    PREVIEW = "preview"
    EDITORS = "editors"


@dataclasses.dataclass
class GetProjectDocumentQueryParams:
    with_: Optional[list[GetProjectDocumentWithEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'with[]', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetProjectDocumentRequest:
    path_params: GetProjectDocumentPathParams = dataclasses.field()
    query_params: GetProjectDocumentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    document: Optional[shared_document.Document] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
