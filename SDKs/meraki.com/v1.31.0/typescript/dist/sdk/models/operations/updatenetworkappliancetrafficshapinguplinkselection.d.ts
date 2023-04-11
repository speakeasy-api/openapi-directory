import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The default uplink. Must be one of: 'wan1' or 'wan2'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Immediate WAN transition terminates all flows (new and existing) on current WAN when it is deemed unreliable.
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate extends SpeakeasyBase {
    /**
     * Toggle for enabling or disabling immediate WAN failover and failback
     */
    enabled: boolean;
}
/**
 * WAN failover and failback behavior
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback extends SpeakeasyBase {
    /**
     * Immediate WAN transition terminates all flows (new and existing) on current WAN when it is deemed unreliable.
     */
    immediate?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailbackImmediate;
}
/**
 * Fail over criterion for this uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance",
    UplinkDown = "uplinkDown"
}
/**
 * Name of builtin performance class, must be present when performanceClass type is 'builtin', and value must be one of: 'VoIP'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIP = "VoIP"
}
/**
 * Type of this performance class. Must be one of: 'builtin' or 'custom'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin",
    Custom = "custom"
}
/**
 * Performance class setting for this uplink preference rule
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
    /**
     * Name of builtin performance class, must be present when performanceClass type is 'builtin', and value must be one of: 'VoIP'
     */
    builtinPerformanceClassName?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
    /**
     * ID of created custom performance class, must be present when performanceClass type is 'custom'
     */
    customPerformanceClassId?: string;
    /**
     * Type of this performance class. Must be one of: 'builtin' or 'custom'
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}
/**
 * Preferred uplink for this uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    BestForVoIP = "bestForVoIP",
    DefaultUplink = "defaultUplink",
    LoadBalancing = "loadBalancing",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Type of this traffic filter. Must be one of: 'applicationCategory', 'application' or 'custom'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Custom = "custom"
}
/**
 * Destination of this custom type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    /**
     * CIDR format address, or "any". E.g.: "192.168.10.0/24",  "192.168.10.1" (same as "192.168.10.1/32"), "0.0.0.0/0" (same as "any")
     */
    cidr?: string;
    /**
     * FQDN format address. Currently only availabe in 'destination' of 'vpnTrafficUplinkPreference' object. E.g.: 'www.google.com'
     */
    fqdn?: string;
    /**
     * Host ID in the VLAN, should be used along with 'vlan', and not exceed the vlan subnet capacity. Currently only available under a template network.
     */
    host?: number;
    /**
     * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: "L_12345678".
     */
    network?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp', 'icmp6' or 'any'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of this custom type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    /**
     * CIDR format address, or "any". E.g.: "192.168.10.0/24",  "192.168.10.1" (same as "192.168.10.1/32"), "0.0.0.0/0" (same as "any")
     */
    cidr?: string;
    /**
     * Host ID in the VLAN, should be used along with 'vlan', and not exceed the vlan subnet capacity. Currently only available under a template network.
     */
    host?: number;
    /**
     * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: "L_12345678".
     */
    network?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Value object of this traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of this custom type traffic filter
     */
    destination?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * ID of this applicationCategory or application type traffic filter. E.g.: "meraki:layer7/category/1", "meraki:layer7/application/4"
     */
    id?: string;
    /**
     * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp', 'icmp6' or 'any'
     */
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of this custom type traffic filter
     */
    source?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Type of this traffic filter. Must be one of: 'applicationCategory', 'application' or 'custom'
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value object of this traffic filter
     */
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Fail over criterion for this uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
     */
    failOverCriterion?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesFailOverCriterionEnum;
    /**
     * Performance class setting for this uplink preference rule
     */
    performanceClass?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPerformanceClass;
    /**
     * Preferred uplink for this uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
     */
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Array of traffic filters for this uplink preference rule
     */
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferencesTrafficFilters[];
}
/**
 * Preferred uplink for this uplink preference rule. Must be one of: 'wan1' or 'wan2'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Type of this traffic filter. Must be one of: 'custom'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}
/**
 * Destination of this custom type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    /**
     * CIDR format address, or "any". E.g.: "192.168.10.0/24",  "192.168.10.1" (same as "192.168.10.1/32"), "0.0.0.0/0" (same as "any")
     */
    cidr?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
}
/**
 * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of this custom type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    /**
     * CIDR format address, or "any". E.g.: "192.168.10.0/24",  "192.168.10.1" (same as "192.168.10.1/32"), "0.0.0.0/0" (same as "any")
     */
    cidr?: string;
    /**
     * Host ID in the VLAN, should be used along with 'vlan', and not exceed the vlan subnet capacity. Currently only available under a template network.
     */
    host?: number;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Value object of this traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of this custom type traffic filter
     */
    destination: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * Protocol of this custom type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any'
     */
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of this custom type traffic filter
     */
    source: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Type of this traffic filter. Must be one of: 'custom'
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value object of this traffic filter
     */
    value: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Preferred uplink for this uplink preference rule. Must be one of: 'wan1' or 'wan2'
     */
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Array of traffic filters for this uplink preference rule
     */
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferencesTrafficFilters[];
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody extends SpeakeasyBase {
    /**
     * Toggle for enabling or disabling active-active AutoVPN
     */
    activeActiveAutoVpnEnabled?: boolean;
    /**
     * The default uplink. Must be one of: 'wan1' or 'wan2'
     */
    defaultUplink?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyDefaultUplinkEnum;
    /**
     * WAN failover and failback behavior
     */
    failoverAndFailback?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyFailoverAndFailback;
    /**
     * Toggle for enabling or disabling load balancing
     */
    loadBalancingEnabled?: boolean;
    /**
     * Array of uplink preference rules for VPN traffic
     */
    vpnTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyVpnTrafficUplinkPreferences[];
    /**
     * Array of uplink preference rules for WAN traffic
     */
    wanTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBodyWanTrafficUplinkPreferences[];
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceTrafficShapingUplinkSelectionRequestBody;
    networkId: string;
}
/**
 * The default uplink. Must be one of: 'wan1' or 'wan2'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONDefaultUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Immediate WAN failover and failback
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailbackImmediate extends SpeakeasyBase {
    /**
     * Whether immediate WAN failover and failback is enabled
     */
    enabled: boolean;
}
/**
 * WAN failover and failback
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailback extends SpeakeasyBase {
    /**
     * Immediate WAN failover and failback
     */
    immediate?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailbackImmediate;
}
/**
 * Fail over criterion for uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance",
    UplinkDown = "uplinkDown"
}
/**
 * Name of builtin performance class. Must be present when performanceClass type is 'builtin' and value must be one of: 'VoIP'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIP = "VoIP"
}
/**
 * Type of this performance class. Must be one of: 'builtin' or 'custom'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin",
    Custom = "custom"
}
/**
 * Performance class setting for uplink preference rule
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
    /**
     * Name of builtin performance class. Must be present when performanceClass type is 'builtin' and value must be one of: 'VoIP'
     */
    builtinPerformanceClassName?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
    /**
     * ID of created custom performance class, must be present when performanceClass type is "custom"
     */
    customPerformanceClassId?: string;
    /**
     * Type of this performance class. Must be one of: 'builtin' or 'custom'
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}
/**
 * Preferred uplink for uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    BestForVoIP = "bestForVoIP",
    DefaultUplink = "defaultUplink",
    LoadBalancing = "loadBalancing",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Traffic filter type. Must be one of: 'applicationCategory', 'application' or 'custom'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Custom = "custom"
}
/**
 * Destination of 'custom' type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    /**
     * CIDR format address (e.g."192.168.10.1", which is the same as "192.168.10.1/32"), or "any". Cannot be used in combination with the "vlan" or "fqdn" property
     */
    cidr?: string;
    /**
     * FQDN format address. Cannot be used in combination with the "cidr" or "fqdn" property and is currently only available in the "destination" object of the "vpnTrafficUplinkPreference" object. E.g.: "www.google.com"
     */
    fqdn?: string;
    /**
     * Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the "vlan" property and is currently only available under a template network.
     */
    host?: number;
    /**
     * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: "L_12345678".
     */
    network?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the "cidr" or "fqdn" property and is currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp', 'icmp6' or 'any'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of 'custom' type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    /**
     * CIDR format address (e.g."192.168.10.1", which is the same as "192.168.10.1/32"), or "any". Cannot be used in combination with the "vlan" property
     */
    cidr?: string;
    /**
     * Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the "vlan" property and is currently only available under a template network.
     */
    host?: number;
    /**
     * Meraki network ID. Currently only available under a template network, and the value should be ID of either same template network, or another template network currently. E.g.: "L_12345678".
     */
    network?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the "cidr" property and is currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Value of traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of 'custom' type traffic filter
     */
    destination?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * ID of 'applicationCategory' or 'application' type traffic filter
     */
    id?: string;
    /**
     * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp', 'icmp6' or 'any'
     */
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of 'custom' type traffic filter
     */
    source?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Traffic filter type. Must be one of: 'applicationCategory', 'application' or 'custom'
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value of traffic filter
     */
    value: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Fail over criterion for uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
     */
    failOverCriterion?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesFailOverCriterionEnum;
    /**
     * Performance class setting for uplink preference rule
     */
    performanceClass?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClass;
    /**
     * Preferred uplink for uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
     */
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Traffic filters
     */
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFilters[];
}
/**
 * Preferred uplink for uplink preference rule. Must be one of: 'wan1' or 'wan2'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Traffic filter type. Must be "custom"
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}
/**
 * Destination of 'custom' type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
    /**
     * CIDR format address (e.g."192.168.10.1", which is the same as "192.168.10.1/32"), or "any"
     */
    cidr?: string;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
}
/**
 * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any'
 */
export declare enum UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of 'custom' type traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
    /**
     * CIDR format address (e.g."192.168.10.1", which is the same as "192.168.10.1/32"), or "any". Cannot be used in combination with the "vlan" property
     */
    cidr?: string;
    /**
     * Host ID in the VLAN. Should not exceed the VLAN subnet capacity. Must be used along with the "vlan" property and is currently only available under a template network.
     */
    host?: number;
    /**
     * E.g.: "any", "0" (also means "any"), "8080", "1-1024"
     */
    port?: string;
    /**
     * VLAN ID of the configured VLAN in the Meraki network. Cannot be used in combination with the "cidr" property and is currently only available under a template network.
     */
    vlan?: number;
}
/**
 * Value of traffic filter
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of 'custom' type traffic filter
     */
    destination: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any'
     */
    protocol?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of 'custom' type traffic filter
     */
    source: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Traffic filter type. Must be "custom"
     */
    type: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value of traffic filter
     */
    value: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Preferred uplink for uplink preference rule. Must be one of: 'wan1' or 'wan2'
     */
    preferredUplink: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Traffic filters
     */
    trafficFilters: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFilters[];
}
/**
 * Successful operation
 */
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether active-active AutoVPN is enabled
     */
    activeActiveAutoVpnEnabled?: boolean;
    /**
     * The default uplink. Must be one of: 'wan1' or 'wan2'
     */
    defaultUplink?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONDefaultUplinkEnum;
    /**
     * WAN failover and failback
     */
    failoverAndFailback?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailback;
    /**
     * Whether load balancing is enabled
     */
    loadBalancingEnabled?: boolean;
    /**
     * Uplink preference rules for VPN traffic
     */
    vpnTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferences[];
    /**
     * Uplink preference rules for WAN traffic
     */
    wanTrafficUplinkPreferences?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferences[];
}
export declare class UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject?: UpdateNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSON;
}
