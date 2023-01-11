import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateLicenseTemplatePathParams:
    license_template_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseTemplateNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateLicenseTemplateRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'active' }})
    automatic: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'automatic' }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    hide_licenses: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'hideLicenses' }})
    license_type: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseType' }})
    max_sessions: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'maxSessions' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    quota: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'quota' }})
    time_volume: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    

@dataclasses.dataclass
class UpdateLicenseTemplateSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateLicenseTemplateRequest:
    path_params: UpdateLicenseTemplatePathParams = dataclasses.field()
    security: UpdateLicenseTemplateSecurity = dataclasses.field()
    request: Optional[UpdateLicenseTemplateRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateLicenseTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
