import dataclasses
from typing import Optional
from ..shared import applicationdocumentresult as shared_applicationdocumentresult


@dataclasses.dataclass
class GetApplicationDocumentPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetApplicationDocumentRequest:
    path_params: GetApplicationDocumentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetApplicationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_document_result: Optional[shared_applicationdocumentresult.ApplicationDocumentResult] = dataclasses.field(default=None)
    
