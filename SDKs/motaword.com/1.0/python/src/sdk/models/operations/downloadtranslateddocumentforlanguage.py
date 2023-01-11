import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadTranslatedDocumentForLanguagePathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadTranslatedDocumentForLanguageQueryParams:
    certified: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'certified', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DownloadTranslatedDocumentForLanguageRequest:
    path_params: DownloadTranslatedDocumentForLanguagePathParams = dataclasses.field()
    query_params: DownloadTranslatedDocumentForLanguageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadTranslatedDocumentForLanguageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_translated_document_for_language_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
