import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkGroupPolicyPathParams:
    group_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'groupPolicyId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
    The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    
class UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyBandwidth:
    r"""UpdateNetworkGroupPolicyRequestBodyBandwidth
        The bandwidth settings for clients bound to your group policy.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum(str, Enum):
    ALL_SERVICES = "All Services"
    AIR_PLAY = "AirPlay"
    AFP = "AFP"
    BIT_TORRENT = "BitTorrent"
    FTP = "FTP"
    I_CHAT = "iChat"
    I_TUNES = "iTunes"
    PRINTERS = "Printers"
    SAMBA = "Samba"
    SCANNERS = "Scanners"
    SSH = "SSH"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules:
    services: list[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    vlan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding:
    r"""UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
    The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
    """
    
    rules: Optional[list[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns
    Settings for allowed URL patterns
    """
    
    patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories
    Settings for blocked URL categories
    """
    
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns
    Settings for blocked URL patterns
    """
    
    patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyContentFiltering:
    r"""UpdateNetworkGroupPolicyRequestBodyContentFiltering
    The content filtering settings for your group policy
    """
    
    allowed_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedUrlPatterns') }})
    blocked_url_categories: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlCategories') }})
    blocked_url_patterns: Optional[UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlPatterns') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum(str, Enum):
    DENY = "deny"

class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules:
    policy: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"

class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions:
    type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules:
    definitions: list[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    pcp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pcpTagValue') }})
    per_client_bandwidth_limits: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping:
    r"""UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
        The firewall and traffic shaping rules and settings for your policy.
    
    """
    
    l3_firewall_rules: Optional[list[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l3FirewallRules') }})
    l7_firewall_rules: Optional[list[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l7FirewallRules') }})
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    traffic_shaping_rules: Optional[list[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficShapingRules') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingFriday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingMonday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingSunday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingThursday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday:
    r"""UpdateNetworkGroupPolicyRequestBodySchedulingWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyScheduling:
    r"""UpdateNetworkGroupPolicyRequestBodyScheduling
        The schedule for the group policy. Schedules are applied to days of the week.
    
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    friday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingFriday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingMonday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSaturday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingSunday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingThursday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingTuesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[UpdateNetworkGroupPolicyRequestBodySchedulingWednesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    
class UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    BYPASS = "bypass"

class UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBodyVlanTagging:
    r"""UpdateNetworkGroupPolicyRequestBodyVlanTagging
    The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
    """
    
    settings: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    vlan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequestBody:
    bandwidth: Optional[UpdateNetworkGroupPolicyRequestBodyBandwidth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    bonjour_forwarding: Optional[UpdateNetworkGroupPolicyRequestBodyBonjourForwarding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bonjourForwarding') }})
    content_filtering: Optional[UpdateNetworkGroupPolicyRequestBodyContentFiltering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentFiltering') }})
    firewall_and_traffic_shaping: Optional[UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewallAndTrafficShaping') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scheduling: Optional[UpdateNetworkGroupPolicyRequestBodyScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    splash_auth_settings: Optional[UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashAuthSettings') }})
    vlan_tagging: Optional[UpdateNetworkGroupPolicyRequestBodyVlanTagging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanTagging') }})
    

@dataclasses.dataclass
class UpdateNetworkGroupPolicyRequest:
    path_params: UpdateNetworkGroupPolicyPathParams = dataclasses.field()
    request: Optional[UpdateNetworkGroupPolicyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkGroupPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_group_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
