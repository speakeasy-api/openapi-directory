import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadStyleGuidePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    style_guide_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'styleGuideId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadStyleGuideRequest:
    path_params: DownloadStyleGuidePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_style_guide_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
