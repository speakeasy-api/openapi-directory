import dataclasses
from typing import Optional
from ..shared import error as shared_error


@dataclasses.dataclass
class DownloadGlobalStyleGuideResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    download_global_style_guide_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
