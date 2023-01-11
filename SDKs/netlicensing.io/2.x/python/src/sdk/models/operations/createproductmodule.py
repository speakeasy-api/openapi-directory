import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CreateProductModuleRequestBodyLicenseTemplateEnum(str, Enum):
    TIMEVOLUME = "TIMEVOLUME"
    FEATURE = "FEATURE"

class CreateProductModuleRequestBodyNodeSecretModeEnum(str, Enum):
    PREDEFINED = "PREDEFINED"
    CLIENT = "CLIENT"


@dataclasses.dataclass
class CreateProductModuleRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    licensing_model: str = dataclasses.field(metadata={'form': { 'field_name': 'licensingModel' }})
    name: str = dataclasses.field(metadata={'form': { 'field_name': 'name' }})
    product_number: str = dataclasses.field(metadata={'form': { 'field_name': 'productNumber' }})
    license_template: Optional[list[CreateProductModuleRequestBodyLicenseTemplateEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseTemplate' }})
    max_checkout_validity: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'maxCheckoutValidity' }})
    node_secret_mode: Optional[list[CreateProductModuleRequestBodyNodeSecretModeEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'nodeSecretMode' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    red_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redThreshold' }})
    yellow_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'yellowThreshold' }})
    

@dataclasses.dataclass
class CreateProductModuleSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateProductModuleRequest:
    request: CreateProductModuleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateProductModuleSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CreateProductModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
