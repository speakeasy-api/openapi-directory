import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import licenseeditorialvideocontentrequest as shared_licenseeditorialvideocontentrequest


@dataclasses.dataclass
class LicenseEditorialVideoSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LicenseEditorialVideoRequest:
    request: shared_licenseeditorialvideocontentrequest.LicenseEditorialVideoContentRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: LicenseEditorialVideoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LicenseEditorialVideoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    license_editorial_content_results: Optional[Any] = dataclasses.field(default=None)
    
