import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSnmpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSnmpRequestBodyAccessEnum(str, Enum):
    NONE = "none"
    COMMUNITY = "community"
    USERS = "users"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSnmpRequestBodyUsers:
    passphrase: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    username: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSnmpRequestBody:
    access: Optional[UpdateNetworkSnmpRequestBodyAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    community_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communityString') }})
    users: Optional[list[UpdateNetworkSnmpRequestBodyUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclasses.dataclass
class UpdateNetworkSnmpRequest:
    path_params: UpdateNetworkSnmpPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSnmpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSnmpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_snmp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
