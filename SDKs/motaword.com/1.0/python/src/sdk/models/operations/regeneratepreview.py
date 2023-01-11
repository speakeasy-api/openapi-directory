import dataclasses
from typing import Optional
from ..shared import regeneratepreviewresponse as shared_regeneratepreviewresponse


@dataclasses.dataclass
class RegeneratePreviewPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegeneratePreviewRequest:
    path_params: RegeneratePreviewPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RegeneratePreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    regenerate_preview_response: Optional[shared_regeneratepreviewresponse.RegeneratePreviewResponse] = dataclasses.field(default=None)
    
