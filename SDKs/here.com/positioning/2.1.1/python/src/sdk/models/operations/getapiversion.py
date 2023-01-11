import dataclasses
from typing import Optional
from ..shared import apiversion as shared_apiversion


@dataclasses.dataclass
class GetAPIVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_version: Optional[shared_apiversion.APIVersion] = dataclasses.field(default=None)
    
