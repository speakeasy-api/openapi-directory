import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs:
    hub_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubId') }})
    use_default_route: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDefaultRoute') }})
    
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum(str, Enum):
    NONE = "none"
    SPOKE = "spoke"
    HUB = "hub"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets:
    local_subnet: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSubnet') }})
    use_vpn: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useVpn') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody:
    mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    hubs: Optional[list[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hubs') }})
    subnets: Optional[list[UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnRequest:
    path_params: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams = dataclasses.field()
    request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceVpnSiteToSiteVpnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_vpn_site_to_site_vpn_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
