import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceSingleLanRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Type of the origin
 */
export declare enum GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the single LAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignmentsOrigin;
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
export declare class GetNetworkApplianceSingleLan200ApplicationJSONIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on single LAN
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the single LAN
     */
    prefixAssignments?: GetNetworkApplianceSingleLan200ApplicationJSONIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this single LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class GetNetworkApplianceSingleLan200ApplicationJSONMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on single LAN.
     */
    enabled?: boolean;
}
/**
 * Successful operation
 */
export declare class GetNetworkApplianceSingleLan200ApplicationJSON extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the single LAN
     */
    applianceIp?: string;
    /**
     * IPv6 configuration on the single LAN
     */
    ipv6?: GetNetworkApplianceSingleLan200ApplicationJSONIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this single LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: GetNetworkApplianceSingleLan200ApplicationJSONMandatoryDhcp;
    /**
     * The subnet of the single LAN
     */
    subnet?: string;
}
export declare class GetNetworkApplianceSingleLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceSingleLan200ApplicationJSONObject?: GetNetworkApplianceSingleLan200ApplicationJSON;
}
