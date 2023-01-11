import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class StopScreenshotsTestPathParams:
    test_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StopScreenshotsTestSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class StopScreenshotsTestRequest:
    path_params: StopScreenshotsTestPathParams = dataclasses.field()
    security: StopScreenshotsTestSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StopScreenshotsTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    forbidden: Optional[Any] = dataclasses.field(default=None)
    stop_screenshot_not_found: Optional[Any] = dataclasses.field(default=None)
    stop_screenshot_success: Optional[Any] = dataclasses.field(default=None)
    
