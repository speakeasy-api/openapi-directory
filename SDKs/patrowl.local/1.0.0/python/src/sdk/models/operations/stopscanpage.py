import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class StopScanPagePathParams:
    scan_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopScanPageRequest:
    path_params: StopScanPagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class StopScanPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_response: Optional[Any] = dataclasses.field(default=None)
    
