import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteLicenseTemplatePathParams:
    license_template_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLicenseTemplateQueryParams:
    force_cascade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteLicenseTemplateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteLicenseTemplateRequest:
    path_params: DeleteLicenseTemplatePathParams = dataclasses.field()
    query_params: DeleteLicenseTemplateQueryParams = dataclasses.field()
    security: DeleteLicenseTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLicenseTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
