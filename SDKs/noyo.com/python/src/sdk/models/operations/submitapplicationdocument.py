import dataclasses
from typing import Optional
from ..shared import applicationdocumenteditrequest as shared_applicationdocumenteditrequest
from ..shared import applicationdocumentresult as shared_applicationdocumentresult


@dataclasses.dataclass
class SubmitApplicationDocumentPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    document_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SubmitApplicationDocumentRequest:
    path_params: SubmitApplicationDocumentPathParams = dataclasses.field()
    request: shared_applicationdocumenteditrequest.ApplicationDocumentEditRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubmitApplicationDocumentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    application_document_result: Optional[shared_applicationdocumentresult.ApplicationDocumentResult] = dataclasses.field(default=None)
    
