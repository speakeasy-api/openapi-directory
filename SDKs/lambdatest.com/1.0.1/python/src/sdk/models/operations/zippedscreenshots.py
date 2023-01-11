import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import zipped_screenshots_success as shared_zipped_screenshots_success


@dataclasses.dataclass
class ZippedScreenshotsPathParams:
    test_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'test_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ZippedScreenshotsSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ZippedScreenshotsRequest:
    path_params: ZippedScreenshotsPathParams = dataclasses.field()
    security: ZippedScreenshotsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ZippedScreenshotsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied: Optional[Any] = dataclasses.field(default=None)
    forbidden: Optional[Any] = dataclasses.field(default=None)
    screenshot_not_found: Optional[Any] = dataclasses.field(default=None)
    zipped_screenshots_success: Optional[shared_zipped_screenshots_success.ZippedScreenshotsSuccess] = dataclasses.field(default=None)
    
