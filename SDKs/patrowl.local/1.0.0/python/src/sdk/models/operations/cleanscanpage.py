import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CleanScanPagePathParams:
    scan_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CleanScanPageRequest:
    path_params: CleanScanPagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CleanScanPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response: Optional[Any] = dataclasses.field(default=None)
    
