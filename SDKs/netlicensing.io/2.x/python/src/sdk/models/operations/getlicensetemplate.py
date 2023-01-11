import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetLicenseTemplatePathParams:
    license_template_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLicenseTemplateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetLicenseTemplateRequest:
    path_params: GetLicenseTemplatePathParams = dataclasses.field()
    security: GetLicenseTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLicenseTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
