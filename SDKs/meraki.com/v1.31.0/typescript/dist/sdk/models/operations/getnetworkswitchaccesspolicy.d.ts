import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    accessPolicyNumber: string;
    networkId: string;
}
/**
 * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
 */
export declare enum GetNetworkSwitchAccessPolicy200ApplicationJSONAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    HybridAuthentication = "Hybrid authentication",
    MACAuthenticationBypass = "MAC authentication bypass"
}
/**
 * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
 */
export declare enum GetNetworkSwitchAccessPolicy200ApplicationJSONDot1xControlDirectionEnum {
    Both = "both",
    Inbound = "inbound"
}
/**
 * 802.1x Settings
 */
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSONDot1x extends SpeakeasyBase {
    /**
     * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
     */
    controlDirection?: GetNetworkSwitchAccessPolicy200ApplicationJSONDot1xControlDirectionEnum;
}
/**
 * Choose the Host Mode for the access policy.
 */
export declare enum GetNetworkSwitchAccessPolicy200ApplicationJSONHostModeEnum {
    MultiAuth = "Multi-Auth",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    SingleHost = "Single-Host"
}
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
 */
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusCriticalAuth extends SpeakeasyBase {
    /**
     * VLAN that clients who use data will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    dataVlanId?: number;
    /**
     * Enable to suspend port bounce when RADIUS servers are unreachable
     */
    suspendPortBounce?: boolean;
    /**
     * VLAN that clients who use voice will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    voiceVlanId?: number;
}
/**
 * Object for RADIUS Settings
 */
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSONRadius extends SpeakeasyBase {
    /**
     * Critical auth settings for when authentication is rejected by the RADIUS server
     */
    criticalAuth?: GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusCriticalAuth;
    /**
     * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    failedAuthVlanId?: number;
    /**
     * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
     */
    reAuthenticationInterval?: number;
}
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusAccountingServers extends SpeakeasyBase {
    /**
     * Public IP address of the RADIUS accounting server
     */
    host?: string;
    /**
     * UDP port that the RADIUS Accounting server listens on for access requests
     */
    port?: number;
}
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusServers extends SpeakeasyBase {
    /**
     * Public IP address of the RADIUS server
     */
    host?: string;
    /**
     * UDP port that the RADIUS server listens on for access requests
     */
    port?: number;
}
/**
 * Successful operation
 */
export declare class GetNetworkSwitchAccessPolicy200ApplicationJSON extends SpeakeasyBase {
    /**
     * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
     */
    accessPolicyType?: GetNetworkSwitchAccessPolicy200ApplicationJSONAccessPolicyTypeEnum;
    /**
     * 802.1x Settings
     */
    dot1x?: GetNetworkSwitchAccessPolicy200ApplicationJSONDot1x;
    /**
     * ID for the guest VLAN allow unauthorized devices access to limited network resources
     */
    guestVlanId?: number;
    /**
     * Choose the Host Mode for the access policy.
     */
    hostMode?: GetNetworkSwitchAccessPolicy200ApplicationJSONHostModeEnum;
    /**
     * Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication.
     */
    increaseAccessSpeed?: boolean;
    /**
     * Name of the access policy
     */
    name?: string;
    /**
     * Object for RADIUS Settings
     */
    radius?: GetNetworkSwitchAccessPolicy200ApplicationJSONRadius;
    /**
     * Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
     */
    radiusAccountingEnabled?: boolean;
    /**
     * List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
     */
    radiusAccountingServers?: GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusAccountingServers[];
    /**
     * Change of authentication for RADIUS re-authentication and disconnection
     */
    radiusCoaSupportEnabled?: boolean;
    /**
     * Acceptable values are `""` for None, or `"11"` for Group Policies ACL
     */
    radiusGroupAttribute?: string;
    /**
     * List of RADIUS servers to require connecting devices to authenticate against before granting network access
     */
    radiusServers?: GetNetworkSwitchAccessPolicy200ApplicationJSONRadiusServers[];
    /**
     * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
     */
    radiusTestingEnabled?: boolean;
    /**
     * Enable to restrict access for clients to a response_objectific set of IP addresses or hostnames prior to authentication
     */
    urlRedirectWalledGardenEnabled?: boolean;
    /**
     * IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
     */
    urlRedirectWalledGardenRanges?: string[];
    /**
     * CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'.
     */
    voiceVlanClients?: boolean;
}
export declare class GetNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSwitchAccessPolicy200ApplicationJSONObject?: GetNetworkSwitchAccessPolicy200ApplicationJSON;
}
