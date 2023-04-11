import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the origin
 */
export declare enum UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type: UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the VLAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignmentsOrigin;
    /**
     * Manual configuration of the IPv6 Appliance IP
     */
    staticApplianceIp6?: string;
    /**
     * Manual configuration of a /64 prefix on the VLAN
     */
    staticPrefix?: string;
}
/**
 * IPv6 configuration on the VLAN
 */
export declare class UpdateNetworkApplianceSingleLanRequestBodyIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on VLAN.
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the VLAN
     */
    prefixAssignments?: UpdateNetworkApplianceSingleLanRequestBodyIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on LAN.
     */
    enabled?: boolean;
}
export declare class UpdateNetworkApplianceSingleLanRequestBody extends SpeakeasyBase {
    /**
     * The appliance IP address of the single LAN
     */
    applianceIp?: string;
    /**
     * IPv6 configuration on the VLAN
     */
    ipv6?: UpdateNetworkApplianceSingleLanRequestBodyIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: UpdateNetworkApplianceSingleLanRequestBodyMandatoryDhcp;
    /**
     * The subnet of the single LAN configuration
     */
    subnet?: string;
}
export declare class UpdateNetworkApplianceSingleLanRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceSingleLanRequestBody;
    networkId: string;
}
/**
 * Type of the origin
 */
export declare enum UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the single LAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOrigin;
    /**
     * Manual configuration of the IPv6 Appliance IP
     */
    staticApplianceIp6?: string;
    /**
     * Manual configuration of a /64 prefix on the single LAN
     */
    staticPrefix?: string;
}
/**
 * IPv6 configuration on the single LAN
 */
export declare class UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on single LAN
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the single LAN
     */
    prefixAssignments?: UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this single LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class UpdateNetworkApplianceSingleLan200ApplicationJSONMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on single LAN.
     */
    enabled?: boolean;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkApplianceSingleLan200ApplicationJSON extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the single LAN
     */
    applianceIp?: string;
    /**
     * IPv6 configuration on the single LAN
     */
    ipv6?: UpdateNetworkApplianceSingleLan200ApplicationJSONIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this single LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: UpdateNetworkApplianceSingleLan200ApplicationJSONMandatoryDhcp;
    /**
     * The subnet of the single LAN
     */
    subnet?: string;
}
export declare class UpdateNetworkApplianceSingleLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceSingleLan200ApplicationJSONObject?: UpdateNetworkApplianceSingleLan200ApplicationJSON;
}
