import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRegistryV2LicensesHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2LicensesSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses200ApplicationJSONLicensesQuota:
    provisioning: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioning') }})
    
class GetRegistryV2Licenses200ApplicationJSONLicensesTypeEnum(str, Enum):
    EVALUATION = "evaluation"
    COMMERCIAL = "commercial"


@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses200ApplicationJSONLicenses:
    app_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    expired: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired') }})
    expiry_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryDate') }})
    features: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    project_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectDescription') }})
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    project_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectName') }})
    quota: Optional[GetRegistryV2Licenses200ApplicationJSONLicensesQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    type: Optional[GetRegistryV2Licenses200ApplicationJSONLicensesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses200ApplicationJSON:
    licenses: list[GetRegistryV2Licenses200ApplicationJSONLicenses] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenses') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2Licenses404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRegistryV2LicensesRequest:
    headers: GetRegistryV2LicensesHeaders = dataclasses.field()
    security: GetRegistryV2LicensesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryV2LicensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_v2_licenses_200_application_json_object: Optional[GetRegistryV2Licenses200ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_licenses_400_application_json_object: Optional[GetRegistryV2Licenses400ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_licenses_401_application_json_object: Optional[GetRegistryV2Licenses401ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_licenses_403_application_json_object: Optional[GetRegistryV2Licenses403ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_licenses_404_application_json_object: Optional[GetRegistryV2Licenses404ApplicationJSON] = dataclasses.field(default=None)
    
