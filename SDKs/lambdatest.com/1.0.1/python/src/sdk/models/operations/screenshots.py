import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import screenshot_details as shared_screenshot_details


@dataclasses.dataclass
class ScreenshotsPathParams:
    test_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScreenshotsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ScreenshotsRequest:
    path_params: ScreenshotsPathParams = dataclasses.field()
    security: ScreenshotsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ScreenshotsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    forbidden: Optional[Any] = dataclasses.field(default=None)
    screenshot_details: Optional[shared_screenshot_details.ScreenshotDetails] = dataclasses.field(default=None)
    screenshot_not_found: Optional[Any] = dataclasses.field(default=None)
    
