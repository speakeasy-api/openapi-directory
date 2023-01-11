import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateLicenseTemplateRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    license_type: str = dataclasses.field(metadata={'form': { 'field_name': 'licenseType' }})
    name: str = dataclasses.field(metadata={'form': { 'field_name': 'name' }})
    product_module_number: str = dataclasses.field(metadata={'form': { 'field_name': 'productModuleNumber' }})
    automatic: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'automatic' }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    hide_licenses: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'hideLicenses' }})
    max_sessions: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'maxSessions' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    quota: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'quota' }})
    time_volume: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    

@dataclasses.dataclass
class CreateLicenseTemplateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateLicenseTemplateRequest:
    request: CreateLicenseTemplateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseTemplateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateLicenseTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
