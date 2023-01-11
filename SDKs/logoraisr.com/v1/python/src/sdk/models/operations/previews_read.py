import dataclasses
from typing import Optional
from ..shared import previewresponse as shared_previewresponse


@dataclasses.dataclass
class PreviewsReadPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PreviewsReadRequest:
    path_params: PreviewsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PreviewsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_response: Optional[shared_previewresponse.PreviewResponse] = dataclasses.field(default=None)
    
