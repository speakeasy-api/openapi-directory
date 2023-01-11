import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import screenshot_payload as shared_screenshot_payload
from ..shared import start_screenshot_bad_request as shared_start_screenshot_bad_request
from ..shared import start_screenshot_success as shared_start_screenshot_success


@dataclasses.dataclass
class StartScreenshotTestSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class StartScreenshotTestRequest:
    request: shared_screenshot_payload.ScreenshotPayload = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: StartScreenshotTestSecurity = dataclasses.field()
    

@dataclasses.dataclass
class StartScreenshotTestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    forbidden: Optional[Any] = dataclasses.field(default=None)
    start_screenshot_bad_request: Optional[shared_start_screenshot_bad_request.StartScreenshotBadRequest] = dataclasses.field(default=None)
    start_screenshot_success: Optional[shared_start_screenshot_success.StartScreenshotSuccess] = dataclasses.field(default=None)
    
