import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadProjectDocumentPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadProjectDocumentRequest:
    path_params: DownloadProjectDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadProjectDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_project_document_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
