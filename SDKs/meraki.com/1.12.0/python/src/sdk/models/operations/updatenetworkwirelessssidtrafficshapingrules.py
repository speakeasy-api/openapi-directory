import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions:
    type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits:
    r"""UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules:
    definitions: list[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    pcp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pcpTagValue') }})
    per_client_bandwidth_limits: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody:
    default_rules_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultRulesEnabled') }})
    rules: Optional[list[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    traffic_shaping_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficShapingEnabled') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesRequest:
    path_params: UpdateNetworkWirelessSsidTrafficShapingRulesPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSsidTrafficShapingRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_ssid_traffic_shaping_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
