import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
 */
export declare enum CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    HybridAuthentication = "Hybrid authentication",
    MACAuthenticationBypass = "MAC authentication bypass"
}
/**
 * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
 */
export declare enum CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum {
    Both = "both",
    Inbound = "inbound"
}
/**
 * 802.1x Settings
 */
export declare class CreateNetworkSwitchAccessPolicyRequestBodyDot1x extends SpeakeasyBase {
    /**
     * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
     */
    controlDirection?: CreateNetworkSwitchAccessPolicyRequestBodyDot1xControlDirectionEnum;
}
/**
 * Choose the Host Mode for the access policy.
 */
export declare enum CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    MultiAuth = "Multi-Auth",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    SingleHost = "Single-Host"
}
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
 */
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
    /**
     * Critical auth settings for when authentication is rejected by the RADIUS server
     */
    criticalAuth?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
    /**
     * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    failedAuthVlanId?: number;
    /**
     * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
     */
    reAuthenticationInterval?: number;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    /**
     * Public IP address of the RADIUS accounting server
     */
    host: string;
    /**
     * UDP port that the RADIUS Accounting server listens on for access requests
     */
    port: number;
    /**
     * RADIUS client shared secret
     */
    secret: string;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
    /**
     * Public IP address of the RADIUS server
     */
    host: string;
    /**
     * UDP port that the RADIUS server listens on for access requests
     */
    port: number;
    /**
     * RADIUS client shared secret
     */
    secret: string;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
    /**
     * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
     */
    accessPolicyType?: CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
    /**
     * 802.1x Settings
     */
    dot1x?: CreateNetworkSwitchAccessPolicyRequestBodyDot1x;
    /**
     * ID for the guest VLAN allow unauthorized devices access to limited network resources
     */
    guestVlanId?: number;
    /**
     * Choose the Host Mode for the access policy.
     */
    hostMode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
    /**
     * Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is 'Hybrid Authentication.
     */
    increaseAccessSpeed?: boolean;
    /**
     * Name of the access policy
     */
    name: string;
    /**
     * Object for RADIUS Settings
     */
    radius?: CreateNetworkSwitchAccessPolicyRequestBodyRadius;
    /**
     * Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
     */
    radiusAccountingEnabled: boolean;
    /**
     * List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
     */
    radiusAccountingServers?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];
    /**
     * Change of authentication for RADIUS re-authentication and disconnection
     */
    radiusCoaSupportEnabled: boolean;
    /**
     * Acceptable values are `""` for None, or `"11"` for Group Policies ACL
     */
    radiusGroupAttribute?: string;
    /**
     * List of RADIUS servers to require connecting devices to authenticate against before granting network access
     */
    radiusServers: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];
    /**
     * If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers
     */
    radiusTestingEnabled: boolean;
    /**
     * Enable to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
     */
    urlRedirectWalledGardenEnabled: boolean;
    /**
     * IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication
     */
    urlRedirectWalledGardenRanges?: string[];
    /**
     * CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is 'Multi-Domain'.
     */
    voiceVlanClients?: boolean;
}
export declare class CreateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchAccessPolicyRequestBody;
    networkId: string;
}
/**
 * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
 */
export declare enum CreateNetworkSwitchAccessPolicy201ApplicationJSONAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    HybridAuthentication = "Hybrid authentication",
    MACAuthenticationBypass = "MAC authentication bypass"
}
/**
 * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
 */
export declare enum CreateNetworkSwitchAccessPolicy201ApplicationJSONDot1xControlDirectionEnum {
    Both = "both",
    Inbound = "inbound"
}
/**
 * 802.1x Settings
 */
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSONDot1x extends SpeakeasyBase {
    /**
     * Supports either 'both' or 'inbound'. Set to 'inbound' to allow unauthorized egress on the switchport. Set to 'both' to control both traffic directions with authorization. Defaults to 'both'
     */
    controlDirection?: CreateNetworkSwitchAccessPolicy201ApplicationJSONDot1xControlDirectionEnum;
}
/**
 * Choose the Host Mode for the access policy.
 */
export declare enum CreateNetworkSwitchAccessPolicy201ApplicationJSONHostModeEnum {
    MultiAuth = "Multi-Auth",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    SingleHost = "Single-Host"
}
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
 */
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusCriticalAuth extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSONRadius extends SpeakeasyBase {
    /**
     * Critical auth settings for when authentication is rejected by the RADIUS server
     */
    criticalAuth?: CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusCriticalAuth;
    /**
     * VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth
     */
    failedAuthVlanId?: number;
    /**
     * Re-authentication period in seconds. Will be null if hostMode is Multi-Auth
     */
    reAuthenticationInterval?: number;
}
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusAccountingServers extends SpeakeasyBase {
    /**
     * Public IP address of the RADIUS accounting server
     */
    host?: string;
    /**
     * UDP port that the RADIUS Accounting server listens on for access requests
     */
    port?: number;
}
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusServers extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchAccessPolicy201ApplicationJSON extends SpeakeasyBase {
    /**
     * Access Type of the policy. Automatically 'Hybrid authentication' when hostMode is 'Multi-Domain'.
     */
    accessPolicyType?: CreateNetworkSwitchAccessPolicy201ApplicationJSONAccessPolicyTypeEnum;
    /**
     * 802.1x Settings
     */
    dot1x?: CreateNetworkSwitchAccessPolicy201ApplicationJSONDot1x;
    /**
     * ID for the guest VLAN allow unauthorized devices access to limited network resources
     */
    guestVlanId?: number;
    /**
     * Choose the Host Mode for the access policy.
     */
    hostMode?: CreateNetworkSwitchAccessPolicy201ApplicationJSONHostModeEnum;
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
    radius?: CreateNetworkSwitchAccessPolicy201ApplicationJSONRadius;
    /**
     * Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients
     */
    radiusAccountingEnabled?: boolean;
    /**
     * List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access
     */
    radiusAccountingServers?: CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusAccountingServers[];
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
    radiusServers?: CreateNetworkSwitchAccessPolicy201ApplicationJSONRadiusServers[];
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
export declare class CreateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchAccessPolicy201ApplicationJSONObject?: CreateNetworkSwitchAccessPolicy201ApplicationJSON;
}
