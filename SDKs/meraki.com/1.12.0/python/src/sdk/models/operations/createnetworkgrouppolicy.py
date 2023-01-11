import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkGroupPolicyPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits:
    r"""CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
    The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    
class CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyBandwidth:
    r"""CreateNetworkGroupPolicyRequestBodyBandwidth
        The bandwidth settings for clients bound to your group policy.
    
    """
    
    bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum(str, Enum):
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
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules:
    services: list[CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    vlan_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
class CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyBonjourForwarding:
    r"""CreateNetworkGroupPolicyRequestBodyBonjourForwarding
    The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
    """
    
    rules: Optional[list[CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns:
    r"""CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns
    Settings for allowed URL patterns
    """
    
    patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatternsSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories:
    r"""CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories
    Settings for blocked URL categories
    """
    
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategoriesSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    APPEND = "append"
    OVERRIDE = "override"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns:
    r"""CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns
    Settings for blocked URL patterns
    """
    
    patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patterns') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatternsSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyContentFiltering:
    r"""CreateNetworkGroupPolicyRequestBodyContentFiltering
    The content filtering settings for your group policy
    """
    
    allowed_url_patterns: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedURLPatterns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedUrlPatterns') }})
    blocked_url_categories: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLCategories] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlCategories') }})
    blocked_url_patterns: Optional[CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedURLPatterns] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlPatterns') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules:
    dest_cidr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    protocol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum(str, Enum):
    DENY = "deny"

class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules:
    policy: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    type: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"

class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum(str, Enum):
    APPLICATION = "application"
    APPLICATION_CATEGORY = "applicationCategory"
    HOST = "host"
    PORT = "port"
    IP_RANGE = "ipRange"
    LOCAL_NET = "localNet"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions:
    type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits:
    r"""CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
    The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits:
    r"""CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
        An object describing the bandwidth settings for your rule.
    
    """
    
    bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    settings: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules:
    definitions: list[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitions') }})
    dscp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dscpTagValue') }})
    pcp_tag_value: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pcpTagValue') }})
    per_client_bandwidth_limits: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perClientBandwidthLimits') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping:
    r"""CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
        The firewall and traffic shaping rules and settings for your policy.
    
    """
    
    l3_firewall_rules: Optional[list[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l3FirewallRules') }})
    l7_firewall_rules: Optional[list[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('l7FirewallRules') }})
    settings: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    traffic_shaping_rules: Optional[list[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trafficShapingRules') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingFriday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingMonday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingSaturday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingSunday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingThursday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingTuesday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodySchedulingWednesday:
    r"""CreateNetworkGroupPolicyRequestBodySchedulingWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyScheduling:
    r"""CreateNetworkGroupPolicyRequestBodyScheduling
        The schedule for the group policy. Schedules are applied to days of the week.
    
    """
    
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    friday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingFriday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingMonday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingSaturday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingSunday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingThursday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingTuesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[CreateNetworkGroupPolicyRequestBodySchedulingWednesday] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    
class CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    BYPASS = "bypass"

class CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum(str, Enum):
    NETWORK_DEFAULT = "network default"
    IGNORE = "ignore"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBodyVlanTagging:
    r"""CreateNetworkGroupPolicyRequestBodyVlanTagging
    The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
    """
    
    settings: Optional[CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    vlan_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkGroupPolicyRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    bandwidth: Optional[CreateNetworkGroupPolicyRequestBodyBandwidth] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    bonjour_forwarding: Optional[CreateNetworkGroupPolicyRequestBodyBonjourForwarding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bonjourForwarding') }})
    content_filtering: Optional[CreateNetworkGroupPolicyRequestBodyContentFiltering] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentFiltering') }})
    firewall_and_traffic_shaping: Optional[CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewallAndTrafficShaping') }})
    scheduling: Optional[CreateNetworkGroupPolicyRequestBodyScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    splash_auth_settings: Optional[CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashAuthSettings') }})
    vlan_tagging: Optional[CreateNetworkGroupPolicyRequestBodyVlanTagging] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanTagging') }})
    

@dataclasses.dataclass
class CreateNetworkGroupPolicyRequest:
    path_params: CreateNetworkGroupPolicyPathParams = dataclasses.field()
    request: CreateNetworkGroupPolicyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkGroupPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_group_policy_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
