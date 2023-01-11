import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateLicenseRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    license_template_number: str = dataclasses.field(metadata={'form': { 'field_name': 'licenseTemplateNumber' }})
    licensee_number: str = dataclasses.field(metadata={'form': { 'field_name': 'licenseeNumber' }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'currency' }})
    hidden: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'hidden' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    parentfeature: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'parentfeature' }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'price' }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'quantity' }})
    start_date: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'startDate' }})
    time_volume: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolume' }})
    time_volume_period: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'timeVolumePeriod' }})
    used_quantity: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'usedQuantity' }})
    

@dataclasses.dataclass
class CreateLicenseSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateLicenseRequest:
    request: CreateLicenseRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateLicenseSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
