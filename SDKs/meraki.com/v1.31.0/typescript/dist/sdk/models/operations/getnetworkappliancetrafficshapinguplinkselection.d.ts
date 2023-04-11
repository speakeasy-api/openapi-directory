import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * The default uplink. Must be one of: 'wan1' or 'wan2'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONDefaultUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Immediate WAN failover and failback
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailbackImmediate extends SpeakeasyBase {
    /**
     * Whether immediate WAN failover and failback is enabled
     */
    enabled: boolean;
}
/**
 * WAN failover and failback
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailback extends SpeakeasyBase {
    /**
     * Immediate WAN failover and failback
     */
    immediate?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailbackImmediate;
}
/**
 * Fail over criterion for uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesFailOverCriterionEnum {
    PoorPerformance = "poorPerformance",
    UplinkDown = "uplinkDown"
}
/**
 * Name of builtin performance class. Must be present when performanceClass type is 'builtin' and value must be one of: 'VoIP'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum {
    VoIP = "VoIP"
}
/**
 * Type of this performance class. Must be one of: 'builtin' or 'custom'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassTypeEnum {
    Builtin = "builtin",
    Custom = "custom"
}
/**
 * Performance class setting for uplink preference rule
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClass extends SpeakeasyBase {
    /**
     * Name of builtin performance class. Must be present when performanceClass type is 'builtin' and value must be one of: 'VoIP'
     */
    builtinPerformanceClassName?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassBuiltinPerformanceClassNameEnum;
    /**
     * ID of created custom performance class, must be present when performanceClass type is "custom"
     */
    customPerformanceClassId?: string;
    /**
     * Type of this performance class. Must be one of: 'builtin' or 'custom'
     */
    type: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClassTypeEnum;
}
/**
 * Preferred uplink for uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPreferredUplinkEnum {
    BestForVoIP = "bestForVoIP",
    DefaultUplink = "defaultUplink",
    LoadBalancing = "loadBalancing",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Traffic filter type. Must be one of: 'applicationCategory', 'application' or 'custom'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Custom = "custom"
}
/**
 * Destination of 'custom' type traffic filter
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
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
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp = "icmp",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of 'custom' type traffic filter
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
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
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of 'custom' type traffic filter
     */
    destination?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * ID of 'applicationCategory' or 'application' type traffic filter
     */
    id?: string;
    /**
     * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp', 'icmp6' or 'any'
     */
    protocol?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of 'custom' type traffic filter
     */
    source?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Traffic filter type. Must be one of: 'applicationCategory', 'application' or 'custom'
     */
    type: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value of traffic filter
     */
    value: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Fail over criterion for uplink preference rule. Must be one of: 'poorPerformance' or 'uplinkDown'
     */
    failOverCriterion?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesFailOverCriterionEnum;
    /**
     * Performance class setting for uplink preference rule
     */
    performanceClass?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPerformanceClass;
    /**
     * Preferred uplink for uplink preference rule. Must be one of: 'wan1', 'wan2', 'bestForVoIP', 'loadBalancing' or 'defaultUplink'
     */
    preferredUplink: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Traffic filters
     */
    trafficFilters: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferencesTrafficFilters[];
}
/**
 * Preferred uplink for uplink preference rule. Must be one of: 'wan1' or 'wan2'
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesPreferredUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Traffic filter type. Must be "custom"
 */
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersTypeEnum {
    Custom = "custom"
}
/**
 * Destination of 'custom' type traffic filter
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueDestination extends SpeakeasyBase {
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
export declare enum GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum {
    Any = "any",
    Icmp6 = "icmp6",
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Source of 'custom' type traffic filter
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueSource extends SpeakeasyBase {
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
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValue extends SpeakeasyBase {
    /**
     * Destination of 'custom' type traffic filter
     */
    destination: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueDestination;
    /**
     * Protocol of 'custom' type traffic filter. Must be one of: 'tcp', 'udp', 'icmp6' or 'any'
     */
    protocol?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueProtocolEnum;
    /**
     * Source of 'custom' type traffic filter
     */
    source: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValueSource;
}
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFilters extends SpeakeasyBase {
    /**
     * Traffic filter type. Must be "custom"
     */
    type: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersTypeEnum;
    /**
     * Value of traffic filter
     */
    value: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFiltersValue;
}
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferences extends SpeakeasyBase {
    /**
     * Preferred uplink for uplink preference rule. Must be one of: 'wan1' or 'wan2'
     */
    preferredUplink: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesPreferredUplinkEnum;
    /**
     * Traffic filters
     */
    trafficFilters: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferencesTrafficFilters[];
}
/**
 * Successful operation
 */
export declare class GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSON extends SpeakeasyBase {
    /**
     * Whether active-active AutoVPN is enabled
     */
    activeActiveAutoVpnEnabled?: boolean;
    /**
     * The default uplink. Must be one of: 'wan1' or 'wan2'
     */
    defaultUplink?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONDefaultUplinkEnum;
    /**
     * WAN failover and failback
     */
    failoverAndFailback?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONFailoverAndFailback;
    /**
     * Whether load balancing is enabled
     */
    loadBalancingEnabled?: boolean;
    /**
     * Uplink preference rules for VPN traffic
     */
    vpnTrafficUplinkPreferences?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONVpnTrafficUplinkPreferences[];
    /**
     * Uplink preference rules for WAN traffic
     */
    wanTrafficUplinkPreferences?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONWanTrafficUplinkPreferences[];
}
export declare class GetNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSONObject?: GetNetworkApplianceTrafficShapingUplinkSelection200ApplicationJSON;
}
