import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateOrganizationSnmpPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationSnmpRequestBodyV3AuthModeEnum(str, Enum):
    MD5 = "MD5"
    SHA = "SHA"

class UpdateOrganizationSnmpRequestBodyV3PrivModeEnum(str, Enum):
    DES = "DES"
    AES128 = "AES128"


@dataclass_json
@dataclasses.dataclass
class UpdateOrganizationSnmpRequestBody:
    peer_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerIps') }})
    v2c_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v2cEnabled') }})
    v3_auth_mode: Optional[UpdateOrganizationSnmpRequestBodyV3AuthModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v3AuthMode') }})
    v3_auth_pass: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v3AuthPass') }})
    v3_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v3Enabled') }})
    v3_priv_mode: Optional[UpdateOrganizationSnmpRequestBodyV3PrivModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v3PrivMode') }})
    v3_priv_pass: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v3PrivPass') }})
    

@dataclasses.dataclass
class UpdateOrganizationSnmpRequest:
    path_params: UpdateOrganizationSnmpPathParams = dataclasses.field()
    request: Optional[UpdateOrganizationSnmpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateOrganizationSnmpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_organization_snmp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
