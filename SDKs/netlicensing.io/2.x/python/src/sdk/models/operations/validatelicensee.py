import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class ValidateLicenseePathParams:
    licensee_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    
class ValidateLicenseeRequestBodyActionEnum(str, Enum):
    CHECK_OUT = "checkOut"
    CHECK_IN = "checkIn"


@dataclasses.dataclass
class ValidateLicenseeRequestBody:
    action: Optional[ValidateLicenseeRequestBodyActionEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'action' }})
    licensee_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseeName' }})
    node_secret: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'nodeSecret' }})
    product_module_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'productModuleNumber' }})
    product_number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'productNumber' }})
    session_id: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'sessionId' }})
    

@dataclasses.dataclass
class ValidateLicenseeSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class ValidateLicenseeRequest:
    path_params: ValidateLicenseePathParams = dataclasses.field()
    security: ValidateLicenseeSecurity = dataclasses.field()
    request: Optional[ValidateLicenseeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class ValidateLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
