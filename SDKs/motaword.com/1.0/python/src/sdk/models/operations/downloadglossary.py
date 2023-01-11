import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadGlossaryPathParams:
    glossary_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'glossaryId', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadGlossaryRequest:
    path_params: DownloadGlossaryPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DownloadGlossaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_glossary_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
