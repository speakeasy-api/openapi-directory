import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSsidRequestBodyApTagsAndVlanIds extends SpeakeasyBase {
    /**
     * Comma-separated list of AP tags
     */
    tags?: string;
    /**
     * Numerical identifier that is assigned to the VLAN
     */
    vlanId?: number;
}
/**
 * The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')
 */
export declare enum UpdateNetworkSsidRequestBodyAuthModeEnum {
    EightThousandAndTwentyOnexGoogle = "8021x-google",
    EightThousandAndTwentyOnexLocalradius = "8021x-localradius",
    EightThousandAndTwentyOnexMeraki = "8021x-meraki",
    EightThousandAndTwentyOnexNac = "8021x-nac",
    EightThousandAndTwentyOnexRadius = "8021x-radius",
    IpskWithRadius = "ipsk-with-radius",
    IpskWithoutRadius = "ipsk-without-radius",
    Open = "open",
    OpenEnhanced = "open-enhanced",
    OpenWithNac = "open-with-nac",
    OpenWithRadius = "open-with-radius",
    Psk = "psk"
}
/**
 * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'
 */
export declare enum UpdateNetworkSsidRequestBodyEncryptionModeEnum {
    Wep = "wep",
    Wpa = "wpa"
}
/**
 * Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')
 */
export declare enum UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum {
    AccessDisabled = "access disabled",
    AccessEnabled = "access enabled"
}
export declare class UpdateNetworkSsidRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    /**
     * IP address to which the APs will send RADIUS accounting messages
     */
    host: string;
    /**
     * Port on the RADIUS server that is listening for accounting messages
     */
    port?: number;
    /**
     * Shared key used to authenticate messages between the APs and RADIUS server
     */
    secret?: string;
}
/**
 * This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')
 */
export declare enum UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum {
    AllowAccess = "Allow access",
    DenyAccess = "Deny access"
}
/**
 * This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')
 */
export declare enum UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum {
    RoundRobin = "Round robin",
    StrictPriorityOrder = "Strict priority order"
}
export declare class UpdateNetworkSsidRequestBodyRadiusServers extends SpeakeasyBase {
    /**
     * IP address of your RADIUS server
     */
    host: string;
    /**
     * UDP port the RADIUS server listens on for Access-requests
     */
    port?: number;
    /**
     * RADIUS client shared secret
     */
    secret?: string;
}
/**
 * The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.
 */
export declare enum UpdateNetworkSsidRequestBodySplashPageEnum {
    Billing = "Billing",
    CiscoISE = "Cisco ISE",
    ClickThroughSplashPage = "Click-through splash page",
    FacebookWiFi = "Facebook Wi-Fi",
    GoogleAppsDomain = "Google Apps domain",
    GoogleOAuth = "Google OAuth",
    None = "None",
    PasswordProtectedWithActiveDirectory = "Password-protected with Active Directory",
    PasswordProtectedWithLDAP = "Password-protected with LDAP",
    PasswordProtectedWithMerakiRADIUS = "Password-protected with Meraki RADIUS",
    PasswordProtectedWithCustomRADIUS = "Password-protected with custom RADIUS",
    SMSAuthentication = "SMS authentication",
    SponsoredGuest = "Sponsored guest",
    SystemsManagerSentry = "Systems Manager Sentry"
}
/**
 * The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')
 */
export declare enum UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1AndWpa2 = "WPA1 and WPA2",
    Wpa1Only = "WPA1 only",
    Wpa2Only = "WPA2 only",
    Wpa3TransitionMode = "WPA3 Transition Mode",
    Wpa3Only = "WPA3 only"
}
export declare class UpdateNetworkSsidRequestBody extends SpeakeasyBase {
    /**
     * The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
     */
    apTagsAndVlanIds?: UpdateNetworkSsidRequestBodyApTagsAndVlanIds[];
    /**
     * The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')
     */
    authMode?: UpdateNetworkSsidRequestBodyAuthModeEnum;
    /**
     * Accepts a list of tags for this SSID. If availableOnAllAps is false, then the SSID will only be broadcast by APs with tags matching any of the tags in this list.
     */
    availabilityTags?: string[];
    /**
     * Boolean indicating whether all APs should broadcast the SSID or if it should be restricted to APs matching any availability tags. Can only be false if the SSID has availability tags.
     */
    availableOnAllAps?: boolean;
    /**
     * The client-serving radio frequencies of this SSID in the default indoor RF profile. ('Dual band operation', '5 GHz band only' or 'Dual band operation with Band Steering')
     */
    bandSelection?: string;
    /**
     * The concentrator to use when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'.
     */
    concentratorNetworkId?: string;
    /**
     * The default VLAN ID used for 'all other APs'. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
     */
    defaultVlanId?: number;
    /**
     * Disassociate clients when 'VPN' concentrator failover occurs in order to trigger clients to re-associate and generate new DHCP requests. This param is only valid if ipAssignmentMode is 'VPN'.
     */
    disassociateClientsOnVpnFailover?: boolean;
    /**
     * Whether or not the SSID is enabled
     */
    enabled?: boolean;
    /**
     * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'
     */
    encryptionMode?: UpdateNetworkSsidRequestBodyEncryptionModeEnum;
    /**
     * Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')
     */
    enterpriseAdminAccess?: UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnum;
    /**
     * The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')
     */
    ipAssignmentMode?: string;
    /**
     * Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.
     */
    lanIsolationEnabled?: boolean;
    /**
     * The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')
     */
    minBitrate?: number;
    /**
     * The name of the SSID
     */
    name?: string;
    /**
     * The download bandwidth limit in Kbps. (0 represents no limit.)
     */
    perClientBandwidthLimitDown?: number;
    /**
     * The upload bandwidth limit in Kbps. (0 represents no limit.)
     */
    perClientBandwidthLimitUp?: number;
    /**
     * The passkey for the SSID. This param is only valid if the authMode is 'psk'
     */
    psk?: string;
    /**
     * Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
     */
    radiusAccountingEnabled?: boolean;
    /**
     * The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'
     */
    radiusAccountingServers?: UpdateNetworkSsidRequestBodyRadiusAccountingServers[];
    /**
     * Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message
     */
    radiusAttributeForGroupPolicies?: string;
    /**
     * If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.
     */
    radiusCoaEnabled?: boolean;
    /**
     * This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')
     */
    radiusFailoverPolicy?: UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnum;
    /**
     * This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')
     */
    radiusLoadBalancingPolicy?: UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnum;
    /**
     * If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.
     */
    radiusOverride?: boolean;
    /**
     * The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
     */
    radiusServers?: UpdateNetworkSsidRequestBodyRadiusServers[];
    /**
     * The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)
     */
    secondaryConcentratorNetworkId?: string;
    /**
     * The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.
     */
    splashPage?: UpdateNetworkSsidRequestBodySplashPageEnum;
    /**
     * Whether or not traffic should be directed to use specific VLANs. This param is only valid if the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
     */
    useVlanTagging?: boolean;
    /**
     * Boolean indicating whether APs should advertise or hide this SSID. APs will only broadcast this SSID if set to true
     */
    visible?: boolean;
    /**
     * The VLAN ID used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Layer 3 roaming with a concentrator' or 'VPN'
     */
    vlanId?: number;
    /**
     * Allow access to a configurable list of IP ranges, which users may access prior to sign-on.
     */
    walledGardenEnabled?: boolean;
    /**
     * Specify your walled garden by entering space-separated addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. 192.168.1.1/24 192.168.37.10/32 www.yahoo.com *.google.com). Meraki's splash page is automatically included in your walled garden.
     */
    walledGardenRanges?: string;
    /**
     * The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')
     */
    wpaEncryptionMode?: UpdateNetworkSsidRequestBodyWpaEncryptionModeEnum;
}
export declare class UpdateNetworkSsidRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSsidRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSsid200ApplicationJSONObject?: Record<string, any>;
}
