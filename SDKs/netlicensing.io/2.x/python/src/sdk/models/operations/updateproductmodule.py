import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateProductModulePathParams:
    product_module_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productModuleNumber', 'style': 'simple', 'explode': False }})
    
class UpdateProductModuleRequestBodyLicenseTemplateEnum(str, Enum):
    TIMEVOLUME = "TIMEVOLUME"
    FEATURE = "FEATURE"

class UpdateProductModuleRequestBodyNodeSecretModeEnum(str, Enum):
    PREDEFINED = "PREDEFINED"
    CLIENT = "CLIENT"


@dataclasses.dataclass
class UpdateProductModuleRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'active' }})
    license_template: Optional[list[UpdateProductModuleRequestBodyLicenseTemplateEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseTemplate' }})
    licensing_model: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licensingModel' }})
    max_checkout_validity: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'maxCheckoutValidity' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    node_secret_mode: Optional[list[UpdateProductModuleRequestBodyNodeSecretModeEnum]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'nodeSecretMode' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    red_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'redThreshold' }})
    yellow_threshold: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'yellowThreshold' }})
    

@dataclasses.dataclass
class UpdateProductModuleSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateProductModuleRequest:
    path_params: UpdateProductModulePathParams = dataclasses.field()
    security: UpdateProductModuleSecurity = dataclasses.field()
    request: Optional[UpdateProductModuleRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateProductModuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
