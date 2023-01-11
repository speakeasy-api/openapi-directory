import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum(str, Enum):
    BLOCKED = "blocked"
    RESTRICTED = "restricted"
    UNRESTRICTED = "unrestricted"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody:
    access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    allowed_ips: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIps') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: UpdateNetworkApplianceFirewallFirewalledServicePathParams = dataclasses.field()
    request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
