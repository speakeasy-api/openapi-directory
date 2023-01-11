import dataclasses
from typing import Optional
from ..shared import applicationdocumentcreaterequest as shared_applicationdocumentcreaterequest
from ..shared import applicationdocumentresult as shared_applicationdocumentresult


@dataclasses.dataclass
class CreateApplicationDocumentPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateApplicationDocumentRequest:
    path_params: CreateApplicationDocumentPathParams = dataclasses.field()
    request: shared_applicationdocumentcreaterequest.ApplicationDocumentCreateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateApplicationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_document_result: Optional[shared_applicationdocumentresult.ApplicationDocumentResult] = dataclasses.field(default=None)
    
