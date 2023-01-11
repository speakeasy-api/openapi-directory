import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ListLicenseTemplatesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ListLicenseTemplatesRequest:
    security: ListLicenseTemplatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListLicenseTemplatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensings: Optional[list[Any]] = dataclasses.field(default=None)
    
