import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCountPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCountHeaders:
    x_request_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Request-Id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCountSecurity:
    auth_bearer: shared_security.SchemeAuthBearer = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCount200ApplicationJSON:
    count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    updated_at: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCount400ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCount401ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCount403ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCount404ApplicationJSON:
    code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    error: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    details: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCountRequest:
    headers: GetRegistryV2AppIDLicenseCountHeaders = dataclasses.field()
    path_params: GetRegistryV2AppIDLicenseCountPathParams = dataclasses.field()
    security: GetRegistryV2AppIDLicenseCountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetRegistryV2AppIDLicenseCountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_registry_v2_app_id_license_count_200_application_json_object: Optional[GetRegistryV2AppIDLicenseCount200ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_app_id_license_count_400_application_json_object: Optional[GetRegistryV2AppIDLicenseCount400ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_app_id_license_count_401_application_json_object: Optional[GetRegistryV2AppIDLicenseCount401ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_app_id_license_count_403_application_json_object: Optional[GetRegistryV2AppIDLicenseCount403ApplicationJSON] = dataclasses.field(default=None)
    get_registry_v2_app_id_license_count_404_application_json_object: Optional[GetRegistryV2AppIDLicenseCount404ApplicationJSON] = dataclasses.field(default=None)
    
