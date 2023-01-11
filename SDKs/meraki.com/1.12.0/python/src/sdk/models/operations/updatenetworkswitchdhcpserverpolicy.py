import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchDhcpServerPolicyPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum(str, Enum):
    ALLOW = "allow"
    BLOCK = "block"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchDhcpServerPolicyRequestBody:
    allowed_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedServers') }})
    blocked_servers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedServers') }})
    default_policy: Optional[UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPolicy') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchDhcpServerPolicyRequest:
    path_params: UpdateNetworkSwitchDhcpServerPolicyPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchDhcpServerPolicyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchDhcpServerPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_dhcp_server_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
