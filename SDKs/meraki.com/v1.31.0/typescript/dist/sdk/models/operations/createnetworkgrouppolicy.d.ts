import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
 */
export declare class CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits extends SpeakeasyBase {
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
export declare enum CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum {
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
export declare class CreateNetworkGroupPolicyRequestBodyBandwidth extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
    /**
     * How bandwidth limits are enforced. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
}
export declare enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum {
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
export declare class CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules extends SpeakeasyBase {
    /**
     * A description for your Bonjour forwarding rule. Optional.
     */
    description?: string;
    /**
     * A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
     */
    services: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum[];
    /**
     * The ID of the service VLAN. Required.
     */
    vlanId: string;
}
/**
 * How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
 */
export declare class CreateNetworkGroupPolicyRequestBodyBonjourForwarding extends SpeakeasyBase {
    /**
     * A list of the Bonjour forwarding rules for your group policy. If 'settings' is set to 'custom', at least one rule must be specified.
     */
    rules?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingRules[];
    /**
     * How Bonjour rules are applied. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
}
/**
 * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for allowed URL patterns
 */
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns extends SpeakeasyBase {
    /**
     * A list of URL patterns that are allowed
     */
    patterns?: string[];
    /**
     * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
}
/**
 * How URL categories are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for blocked URL categories
 */
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories extends SpeakeasyBase {
    /**
     * A list of URL categories to block
     */
    categories?: string[];
    /**
     * How URL categories are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
}
/**
 * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum {
    Append = "append",
    NetworkDefault = "network default",
    Override = "override"
}
/**
 * Settings for blocked URL patterns
 */
export declare class CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns extends SpeakeasyBase {
    /**
     * A list of URL patterns that are blocked
     */
    patterns?: string[];
    /**
     * How URL patterns are applied. Can be 'network default', 'append' or 'override'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
}
/**
 * The content filtering settings for your group policy
 */
export declare class CreateNetworkGroupPolicyRequestBodyContentFiltering extends SpeakeasyBase {
    /**
     * Settings for allowed URL patterns
     */
    allowedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
    /**
     * Settings for blocked URL categories
     */
    blockedUrlCategories?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
    /**
     * Settings for blocked URL patterns
     */
    blockedUrlPatterns?: CreateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules extends SpeakeasyBase {
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
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum {
    Deny = "deny"
}
/**
 * Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
 */
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    Port = "port"
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules extends SpeakeasyBase {
    /**
     * The policy applied to matching traffic. Must be 'deny'.
     */
    policy?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
    /**
     * Type of the L7 Rule. Must be 'application', 'applicationCategory', 'host', 'port' or 'ipRange'
     */
    type?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
    /**
     * The 'value' of what you want to block. If 'type' is 'host', 'port' or 'ipRange', 'value' must be a string matching either a hostname (e.g. somewhere.com), a port (e.g. 8080), or an IP range (e.g. 192.1.0.0/16). If 'type' is 'application' or 'applicationCategory', then 'value' must be an object with an ID for the application.
     */
    value?: string;
}
/**
 * How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    LocalNet = "localNet",
    Port = "port"
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions extends SpeakeasyBase {
    /**
     * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
     */
    type: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
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
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
    /**
     * How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
     */
    settings?: string;
}
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules extends SpeakeasyBase {
    /**
     *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
     *
     * @remarks
     *
     */
    definitions: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions[];
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
    perClientBandwidthLimits?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
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
export declare class CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping extends SpeakeasyBase {
    /**
     * An ordered array of the L3 firewall rules
     */
    l3FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules[];
    /**
     * An ordered array of L7 firewall rules
     */
    l7FirewallRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules[];
    /**
     * How firewall and traffic shaping rules are enforced. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
    /**
     *     An array of traffic shaping rules. Rules are applied in the order that
     *
     * @remarks
     *     they are specified in. An empty list (or null) means no rules. Note that
     *     you are allowed a maximum of 8 rules.
     *
     */
    trafficShapingRules?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules[];
}
/**
 * The schedule object for Friday.
 */
export declare class CreateNetworkGroupPolicyRequestBodySchedulingFriday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingMonday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingSaturday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingSunday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingThursday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingTuesday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodySchedulingWednesday extends SpeakeasyBase {
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
export declare class CreateNetworkGroupPolicyRequestBodyScheduling extends SpeakeasyBase {
    /**
     * Whether scheduling is enabled (true) or disabled (false). Defaults to false. If true, the schedule objects for each day of the week (monday - sunday) are parsed.
     */
    enabled?: boolean;
    /**
     * The schedule object for Friday.
     */
    friday?: CreateNetworkGroupPolicyRequestBodySchedulingFriday;
    /**
     * The schedule object for Monday.
     */
    monday?: CreateNetworkGroupPolicyRequestBodySchedulingMonday;
    /**
     * The schedule object for Saturday.
     */
    saturday?: CreateNetworkGroupPolicyRequestBodySchedulingSaturday;
    /**
     * The schedule object for Sunday.
     */
    sunday?: CreateNetworkGroupPolicyRequestBodySchedulingSunday;
    /**
     * The schedule object for Thursday.
     */
    thursday?: CreateNetworkGroupPolicyRequestBodySchedulingThursday;
    /**
     * The schedule object for Tuesday.
     */
    tuesday?: CreateNetworkGroupPolicyRequestBodySchedulingTuesday;
    /**
     * The schedule object for Wednesday.
     */
    wednesday?: CreateNetworkGroupPolicyRequestBodySchedulingWednesday;
}
/**
 * Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
 */
export declare enum CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum {
    Bypass = "bypass",
    NetworkDefault = "network default"
}
/**
 * How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
 */
export declare enum CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum {
    Custom = "custom",
    Ignore = "ignore",
    NetworkDefault = "network default"
}
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
 */
export declare class CreateNetworkGroupPolicyRequestBodyVlanTagging extends SpeakeasyBase {
    /**
     * How VLAN tagging is applied. Can be 'network default', 'ignore' or 'custom'.
     */
    settings?: CreateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
    /**
     * The ID of the vlan you want to tag. This only applies if 'settings' is set to 'custom'.
     */
    vlanId?: string;
}
export declare class CreateNetworkGroupPolicyRequestBody extends SpeakeasyBase {
    /**
     *     The bandwidth settings for clients bound to your group policy.
     *
     * @remarks
     *
     */
    bandwidth?: CreateNetworkGroupPolicyRequestBodyBandwidth;
    /**
     * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
     */
    bonjourForwarding?: CreateNetworkGroupPolicyRequestBodyBonjourForwarding;
    /**
     * The content filtering settings for your group policy
     */
    contentFiltering?: CreateNetworkGroupPolicyRequestBodyContentFiltering;
    /**
     *     The firewall and traffic shaping rules and settings for your policy.
     *
     * @remarks
     *
     */
    firewallAndTrafficShaping?: CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
    /**
     * The name for your group policy. Required.
     */
    name: string;
    /**
     *     The schedule for the group policy. Schedules are applied to days of the week.
     *
     * @remarks
     *
     */
    scheduling?: CreateNetworkGroupPolicyRequestBodyScheduling;
    /**
     * Whether clients bound to your policy will bypass splash authorization or behave according to the network's rules. Can be one of 'network default' or 'bypass'. Only available if your network has a wireless configuration.
     */
    splashAuthSettings?: CreateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
    /**
     * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
     */
    vlanTagging?: CreateNetworkGroupPolicyRequestBodyVlanTagging;
}
export declare class CreateNetworkGroupPolicyRequest extends SpeakeasyBase {
    requestBody: CreateNetworkGroupPolicyRequestBody;
    networkId: string;
}
export declare class CreateNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkGroupPolicy201ApplicationJSONObject?: Record<string, any>;
}
