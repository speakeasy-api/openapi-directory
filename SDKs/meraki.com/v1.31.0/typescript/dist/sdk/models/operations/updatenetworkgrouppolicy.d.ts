import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
 */
export declare class UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps). null indicates no limit
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps). null indicates no limit
     */
    limitUp?: number;
}
/**
 * How bandwidth limits are enforced. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 *     The bandwidth settings for clients bound to your group policy.
 *
 * @remarks
 *
 */
export declare class UpdateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
    /**
     * How bandwidth limits are enforced. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}
export declare enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
    Afp = "AFP",
    AirPlay = "AirPlay",
    AllServices = "All Services",
    BitTorrent = "BitTorrent",
    Ftp = "FTP",
    Printers = "Printers",
    Ssh = "SSH",
    Samba = "Samba",
    Scanners = "Scanners",
    IChat = "iChat",
    ITunes = "iTunes"
}
export declare class UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
    /**
     * A description for your Bonjour forwarding rule. Optional.
     */
    description?: string;
    /**
     * A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
     */
    services: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];
    /**
     * The ID of the service VLAN. Required.
     */
    vlanId: string;
}
/**
 * How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
 */
export declare class UpdateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
    /**
     * A list of the Bonjour forwarding rules for your group policy. If 'settings' is set to 'custom', at least one rule must be specified.
     */
    rules?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];
    /**
     * How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}
/**
 * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for allowed URL patterns
 */
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
    /**
     * A list of URL patterns that are allowed
     */
    patterns?: string[];
    /**
     * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}
/**
 * How URL categories are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for blocked URL categories
 */
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
    /**
     * A list of URL categories to block
     */
    categories?: string[];
    /**
     * How URL categories are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}
/**
 * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for blocked URL patterns
 */
export declare class UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
    /**
     * A list of URL patterns that are blocked
     */
    patterns?: string[];
    /**
     * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}
/**
 * The content filtering settings for your group policy
 */
export declare class UpdateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
    /**
     * Settings for allowed URL patterns
     */
    allowedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
    /**
     * Settings for blocked URL categories
     */
    blockedUrlCategories?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
    /**
     * Settings for blocked URL patterns
     */
    blockedUrlPatterns?: UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
    /**
     * Description of the rule (optional)
     */
    comment?: string;
    /**
     * Destination IP address (in IP or CIDR notation), a fully-qualified domain name (FQDN, if your network supports it) or 'any'.
     */
    destCidr: string;
    /**
     * Destination port (integer in the range 1-65535), a port range (e.g. 8080-9090), or 'any'
     */
    destPort?: string;
    /**
     * 'allow' or 'deny' traffic specified by this rule
     */
    policy: string;
    /**
     * The type of protocol (must be 'tcp', 'udp', 'icmp', 'icmp6' or 'any')
     */
    protocol: string;
}
/**
 * The policy applied to matching traffic. Must be 'deny'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}
/**
 * Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    Port = "port"
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
    /**
     * The policy applied to matching traffic. Must be 'deny'.
     */
    policy?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
    /**
     * Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
     */
    type?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
    /**
     * The 'value' of what you want to block. If 'type' is 'host', 'port' or 'ipRange', 'value' must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If 'type' is 'application' or 'applicationCategory', then 'value' must be an object with an ID for the application.
     */
    value?: string;
}
/**
 * How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    LocalNet = "localNet",
    Port = "port"
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
    /**
     * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
     */
    type: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
    /**
     *     If "type" is 'host', 'port', 'ipRange' or 'localNet', then "value" must be a string, matching either
     *
     * @remarks
     *     a hostname (e.g. "somesite.com"), a port (e.g. 8080), or an IP range ("192.1.0.0",
     *     "192.1.0.0/16", or "10.1.0.0/16:80"). 'localNet' also supports CIDR notation, excluding
     *     custom ports.
     *      If "type" is 'application' or 'applicationCategory', then "value" must be an object
     *     with the structure { "id": "meraki:layer7/..." }, where "id" is the application category or
     *     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories
     *     endpoint).
     *
     */
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
 */
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps).
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps).
     */
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
 * @remarks
 *
 */
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
    /**
     * How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
     */
    settings?: string;
}
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
    /**
     *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
     *
     * @remarks
     *
     */
    definitions: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];
    /**
     *     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
     *
     * @remarks
     *     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
     *
     */
    dscpTagValue?: number;
    /**
     *     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
     *
     * @remarks
     *     null means 'Do not set PCP tag'.
     *
     */
    pcpTagValue?: number;
    /**
     *     An object describing the bandwidth settings for your rule.
     *
     * @remarks
     *
     */
    perClientBandwidthLimits?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
    /**
     *     A string, indicating the priority level for packets bound to your rule.
     *
     * @remarks
     *     Can be 'low', 'normal' or 'high'.
     *
     */
    priority?: string;
}
/**
 *     The firewall and traffic shaping rules and settings for your policy.
 *
 * @remarks
 *
 */
export declare class UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
    /**
     * An ordered array of the L3 firewall rules
     */
    l3FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];
    /**
     * An ordered array of L7 firewall rules
     */
    l7FirewallRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];
    /**
     * How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
    /**
     *     An array of traffic shaping rules. Rules are applied in the order that
     *
     * @remarks
     *     they are specified in. An empty list (or null) means no rules. Note that
     *     you are allowed a maximum of 8 rules.
     *
     */
    trafficShapingRules?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}
/**
 * The schedule object for Friday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Monday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Saturday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Sunday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Thursday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Tuesday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Wednesday.
 */
export declare class UpdateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 *     The schedule for the group policy. Schedules are applied to days of the week.
 *
 * @remarks
 *
 */
export declare class UpdateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
    /**
     * Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed.
     */
    enabled?: boolean;
    /**
     * The schedule object for Friday.
     */
    friday?: UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
    /**
     * The schedule object for Monday.
     */
    monday?: UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
    /**
     * The schedule object for Saturday.
     */
    saturday?: UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
    /**
     * The schedule object for Sunday.
     */
    sunday?: UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
    /**
     * The schedule object for Thursday.
     */
    thursday?: UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
    /**
     * The schedule object for Tuesday.
     */
    tuesday?: UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
    /**
     * The schedule object for Wednesday.
     */
    wednesday?: UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
}
/**
 * Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    Bypass = "bypass",
    NetworkDefault = "network default"
}
/**
 * How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
 */
export declare class UpdateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
    /**
     * How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
    /**
     * The ID of the vlan you want to tag. This only applies if 'settings' is set to 'custom'.
     */
    vlanId?: string;
}
export declare class UpdateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
    /**
     *     The bandwidth settings for clients bound to your group policy.
     *
     * @remarks
     *
     */
    bandwidth?: UpdateNetworkGroupPolicyRequestBodyBandwidth;
    /**
     * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
     */
    bonjourForwarding?: UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
    /**
     * The content filtering settings for your group policy
     */
    contentFiltering?: UpdateNetworkGroupPolicyRequestBodyContentFiltering;
    /**
     *     The firewall and traffic shaping rules and settings for your policy.
     *
     * @remarks
     *
     */
    firewallAndTrafficShaping?: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
    /**
     * The name for your group policy.
     */
    name?: string;
    /**
     *     The schedule for the group policy. Schedules are applied to days of the week.
     *
     * @remarks
     *
     */
    scheduling?: UpdateNetworkGroupPolicyRequestBodyScheduling;
    /**
     * Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
     */
    splashAuthSettings?: UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
    /**
     * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
     */
    vlanTagging?: UpdateNetworkGroupPolicyRequestBodyVlanTagging;
}
export declare class UpdateNetworkGroupPolicyRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkGroupPolicyRequestBody;
    groupPolicyId: string;
    networkId: string;
}
export declare class UpdateNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkGroupPolicy200ApplicationJSONObject?: Record<string, any>;
}
