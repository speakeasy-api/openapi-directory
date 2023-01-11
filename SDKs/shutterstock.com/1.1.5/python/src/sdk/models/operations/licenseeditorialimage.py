import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import licenseeditorialcontentrequest as shared_licenseeditorialcontentrequest


@dataclasses.dataclass
class LicenseEditorialImageSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LicenseEditorialImageRequest:
    request: shared_licenseeditorialcontentrequest.LicenseEditorialContentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LicenseEditorialImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LicenseEditorialImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_editorial_content_results: Optional[Any] = dataclasses.field(default=None)
    
