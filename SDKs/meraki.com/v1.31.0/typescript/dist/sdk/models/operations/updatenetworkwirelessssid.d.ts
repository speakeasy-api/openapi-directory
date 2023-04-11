import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials extends SpeakeasyBase {
    /**
     * The logon name of the Active Directory account.
     */
    logonName?: string;
    /**
     * The password to the Active Directory user account.
     */
    password?: string;
}
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers extends SpeakeasyBase {
    /**
     * IP address of your Active Directory server.
     */
    host: string;
    /**
     * (Optional) UDP port the Active Directory server listens on. By default, uses port 3268.
     */
    port?: number;
}
/**
 * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
 */
export declare class UpdateNetworkWirelessSsidRequestBodyActiveDirectory extends SpeakeasyBase {
    /**
     * (Optional) The credentials of the user account to be used by the AP to bind to your Active Directory server. The Active Directory account should have permissions on all your Active Directory servers. Only valid if the splashPage is 'Password-protected with Active Directory'.
     */
    credentials?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials;
    /**
     * The Active Directory servers to be used for authentication.
     */
    servers?: UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers[];
}
export declare class UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds extends SpeakeasyBase {
    /**
     * Array of AP tags
     */
    tags?: string[];
    /**
     * Numerical identifier that is assigned to the VLAN
     */
    vlanId?: number;
}
/**
 * The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyAuthModeEnum {
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
 * DNS servers rewrite settings
 */
export declare class UpdateNetworkWirelessSsidRequestBodyDnsRewrite extends SpeakeasyBase {
    /**
     * User specified DNS servers (up to two servers)
     */
    dnsCustomNameservers?: string[];
    /**
     * Boolean indicating whether or not DNS server rewrite is enabled. If disabled, upstream DNS will be used
     */
    enabled?: boolean;
}
/**
 * The current setting for 802.11r
 */
export declare class UpdateNetworkWirelessSsidRequestBodyDot11r extends SpeakeasyBase {
    /**
     * (Optional) Whether 802.11r is adaptive or not.
     */
    adaptive?: boolean;
    /**
     * Whether 802.11r is enabled or not.
     */
    enabled?: boolean;
}
/**
 * The current setting for Protected Management Frames (802.11w).
 */
export declare class UpdateNetworkWirelessSsidRequestBodyDot11w extends SpeakeasyBase {
    /**
     * Whether 802.11w is enabled or not.
     */
    enabled?: boolean;
    /**
     * (Optional) Whether 802.11w is required or not.
     */
    required?: boolean;
}
/**
 * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum {
    Wep = "wep",
    Wpa = "wpa"
}
/**
 * Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum {
    AccessDisabled = "access disabled",
    AccessEnabled = "access enabled"
}
/**
 * The EoGRE concentrator's settings
 */
export declare class UpdateNetworkWirelessSsidRequestBodyGreConcentrator extends SpeakeasyBase {
    /**
     * The EoGRE concentrator's IP or FQDN. This param is required when ipAssignmentMode is 'Ethernet over GRE'.
     */
    host: string;
}
/**
 * Ethernet over GRE settings
 */
export declare class UpdateNetworkWirelessSsidRequestBodyGre extends SpeakeasyBase {
    /**
     * The EoGRE concentrator's settings
     */
    concentrator?: UpdateNetworkWirelessSsidRequestBodyGreConcentrator;
    /**
     * Optional numerical identifier that will add the GRE key field to the GRE header. Used to identify an individual traffic flow within a tunnel.
     */
    key?: number;
}
/**
 * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLdapCredentials extends SpeakeasyBase {
    /**
     * The distinguished name of the LDAP user account (example: cn=user,dc=meraki,dc=com).
     */
    distinguishedName?: string;
    /**
     * The password of the LDAP user account.
     */
    password?: string;
}
/**
 * The CA certificate used to sign the LDAP server's key.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate extends SpeakeasyBase {
    /**
     * The contents of the CA certificate. Must be in PEM or DER format.
     */
    contents?: string;
}
export declare class UpdateNetworkWirelessSsidRequestBodyLdapServers extends SpeakeasyBase {
    /**
     * IP address of your LDAP server.
     */
    host: string;
    /**
     * UDP port the LDAP server listens on.
     */
    port: number;
}
/**
 * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLdap extends SpeakeasyBase {
    /**
     * The base distinguished name of users on the LDAP server.
     */
    baseDistinguishedName?: string;
    /**
     * (Optional) The credentials of the user account to be used by the AP to bind to your LDAP server. The LDAP account should have permissions on all your LDAP servers.
     */
    credentials?: UpdateNetworkWirelessSsidRequestBodyLdapCredentials;
    /**
     * The CA certificate used to sign the LDAP server's key.
     */
    serverCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate;
    /**
     * The LDAP servers to be used for authentication.
     */
    servers?: UpdateNetworkWirelessSsidRequestBodyLdapServers[];
}
/**
 * The Client CA Certificate used to sign the client certificate.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate extends SpeakeasyBase {
    /**
     * The contents of the Client CA Certificate. Must be in PEM or DER format.
     */
    contents?: string;
}
/**
 * The current setting for certificate verification.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication extends SpeakeasyBase {
    /**
     * The Client CA Certificate used to sign the client certificate.
     */
    clientRootCaCertificate?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate;
    /**
     * Whether or not to use EAP-TLS certificate-based authentication to validate wireless clients.
     */
    enabled?: boolean;
    /**
     * (Optional) The URL of the OCSP responder to verify client certificate status.
     */
    ocspResponderUrl?: string;
    /**
     * Whether or not to verify the certificate with LDAP.
     */
    useLdap?: boolean;
    /**
     * Whether or not to verify the certificate with OCSP.
     */
    useOcsp?: boolean;
}
/**
 * The current setting for password-based authentication.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication extends SpeakeasyBase {
    /**
     * Whether or not to use EAP-TTLS/PAP or PEAP-GTC password-based authentication via LDAP lookup.
     */
    enabled?: boolean;
}
/**
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyLocalRadius extends SpeakeasyBase {
    /**
     * The duration (in seconds) for which LDAP and OCSP lookups are cached.
     */
    cacheTimeout?: number;
    /**
     * The current setting for certificate verification.
     */
    certificateAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication;
    /**
     * The current setting for password-based authentication.
     */
    passwordAuthentication?: UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication;
}
/**
 * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
 */
export declare class UpdateNetworkWirelessSsidRequestBodyOauth extends SpeakeasyBase {
    /**
     * (Optional) The list of domains allowed access to the network.
     */
    allowedDomains?: string[];
}
export declare class UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    /**
     * Certificate used for authorization for the RADSEC Server
     */
    caCertificate?: string;
    /**
     * IP address to which the APs will send RADIUS accounting messages
     */
    host: string;
    /**
     * Port on the RADIUS server that is listening for accounting messages
     */
    port?: number;
    /**
     * Use RADSEC (TLS over TCP) to connect to this RADIUS accounting server. Requires radiusProxyEnabled.
     */
    radsecEnabled?: boolean;
    /**
     * Shared key used to authenticate messages between the APs and RADIUS server
     */
    secret?: string;
}
/**
 * Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum {
    AirespaceACLName = "Airespace-ACL-Name",
    ArubaUserRole = "Aruba-User-Role",
    FilterId = "Filter-Id",
    ReplyMessage = "Reply-Message"
}
/**
 * This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum {
    AllowAccess = "Allow access",
    DenyAccess = "Deny access"
}
/**
 * This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')
 */
export declare enum UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum {
    RoundRobin = "Round robin",
    StrictPriorityOrder = "Strict priority order"
}
export declare class UpdateNetworkWirelessSsidRequestBodyRadiusServers extends SpeakeasyBase {
    /**
     * Certificate used for authorization for the RADSEC Server
     */
    caCertificate?: string;
    /**
     * IP address of your RADIUS server
     */
    host: string;
    /**
     * The ID of the Openroaming Certificate attached to radius server.
     */
    openRoamingCertificateId?: number;
    /**
     * UDP port the RADIUS server listens on for Access-requests
     */
    port?: number;
    /**
     * Use RADSEC (TLS over TCP) to connect to this RADIUS server. Requires radiusProxyEnabled.
     */
    radsecEnabled?: boolean;
    /**
     * RADIUS client shared secret
     */
    secret?: string;
}
/**
 * The SpeedBurst setting for this SSID'
 */
export declare class UpdateNetworkWirelessSsidRequestBodySpeedBurst extends SpeakeasyBase {
    /**
     * Boolean indicating whether or not to allow users to temporarily exceed the bandwidth limit for short periods while still keeping them under the bandwidth limit over time.
     */
    enabled?: boolean;
}
/**
 * The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.
 */
export declare enum UpdateNetworkWirelessSsidRequestBodySplashPageEnum {
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
export declare enum UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1AndWpa2 = "WPA1 and WPA2",
    Wpa1Only = "WPA1 only",
    Wpa2Only = "WPA2 only",
    Wpa3TransitionMode = "WPA3 Transition Mode",
    Wpa3Only = "WPA3 only"
}
export declare class UpdateNetworkWirelessSsidRequestBody extends SpeakeasyBase {
    /**
     * The current setting for Active Directory. Only valid if splashPage is 'Password-protected with Active Directory'
     */
    activeDirectory?: UpdateNetworkWirelessSsidRequestBodyActiveDirectory;
    /**
     * Boolean indicating whether or not adult content will be blocked
     */
    adultContentFilteringEnabled?: boolean;
    /**
     * The list of tags and VLAN IDs used for VLAN tagging. This param is only valid when the ipAssignmentMode is 'Bridge mode' or 'Layer 3 roaming'
     */
    apTagsAndVlanIds?: UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[];
    /**
     * The association control method for the SSID ('open', 'open-enhanced', 'psk', 'open-with-radius', 'open-with-nac', '8021x-meraki', '8021x-nac', '8021x-radius', '8021x-google', '8021x-localradius', 'ipsk-with-radius' or 'ipsk-without-radius')
     */
    authMode?: UpdateNetworkWirelessSsidRequestBodyAuthModeEnum;
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
     * DNS servers rewrite settings
     */
    dnsRewrite?: UpdateNetworkWirelessSsidRequestBodyDnsRewrite;
    /**
     * The current setting for 802.11r
     */
    dot11r?: UpdateNetworkWirelessSsidRequestBodyDot11r;
    /**
     * The current setting for Protected Management Frames (802.11w).
     */
    dot11w?: UpdateNetworkWirelessSsidRequestBodyDot11w;
    /**
     * Whether or not the SSID is enabled
     */
    enabled?: boolean;
    /**
     * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'
     */
    encryptionMode?: UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum;
    /**
     * Whether or not an SSID is accessible by 'enterprise' administrators ('access disabled' or 'access enabled')
     */
    enterpriseAdminAccess?: UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum;
    /**
     * Ethernet over GRE settings
     */
    gre?: UpdateNetworkWirelessSsidRequestBodyGre;
    /**
     * The client IP assignment mode ('NAT mode', 'Bridge mode', 'Layer 3 roaming', 'Ethernet over GRE', 'Layer 3 roaming with a concentrator' or 'VPN')
     */
    ipAssignmentMode?: string;
    /**
     * Boolean indicating whether Layer 2 LAN isolation should be enabled or disabled. Only configurable when ipAssignmentMode is 'Bridge mode'.
     */
    lanIsolationEnabled?: boolean;
    /**
     * The current setting for LDAP. Only valid if splashPage is 'Password-protected with LDAP'.
     */
    ldap?: UpdateNetworkWirelessSsidRequestBodyLdap;
    /**
     * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
     */
    localRadius?: UpdateNetworkWirelessSsidRequestBodyLocalRadius;
    /**
     * If true, Mandatory DHCP will enforce that clients connecting to this SSID must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate.
     */
    mandatoryDhcpEnabled?: boolean;
    /**
     * The minimum bitrate in Mbps of this SSID in the default indoor RF profile. ('1', '2', '5.5', '6', '9', '11', '12', '18', '24', '36', '48' or '54')
     */
    minBitrate?: number;
    /**
     * The name of the SSID
     */
    name?: string;
    /**
     * The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.
     */
    oauth?: UpdateNetworkWirelessSsidRequestBodyOauth;
    /**
     * The download bandwidth limit in Kbps. (0 represents no limit.)
     */
    perClientBandwidthLimitDown?: number;
    /**
     * The upload bandwidth limit in Kbps. (0 represents no limit.)
     */
    perClientBandwidthLimitUp?: number;
    /**
     * The total download bandwidth limit in Kbps. (0 represents no limit.)
     */
    perSsidBandwidthLimitDown?: number;
    /**
     * The total upload bandwidth limit in Kbps. (0 represents no limit.)
     */
    perSsidBandwidthLimitUp?: number;
    /**
     * The passkey for the SSID. This param is only valid if the authMode is 'psk'
     */
    psk?: string;
    /**
     * Whether or not RADIUS accounting is enabled. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
     */
    radiusAccountingEnabled?: boolean;
    /**
     * The interval (in seconds) in which accounting information is updated and sent to the RADIUS accounting server.
     */
    radiusAccountingInterimInterval?: number;
    /**
     * The RADIUS accounting 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius' and radiusAccountingEnabled is 'true'
     */
    radiusAccountingServers?: UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[];
    /**
     * Specify the RADIUS attribute used to look up group policies ('Filter-Id', 'Reply-Message', 'Airespace-ACL-Name' or 'Aruba-User-Role'). Access points must receive this attribute in the RADIUS Access-Accept message
     */
    radiusAttributeForGroupPolicies?: UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum;
    /**
     * The template of the NAS identifier to be used for RADIUS authentication (ex. $NODE_MAC$:$VAP_NUM$).
     */
    radiusAuthenticationNasId?: string;
    /**
     * The template of the called station identifier to be used for RADIUS (ex. $NODE_MAC$:$VAP_NUM$).
     */
    radiusCalledStationId?: string;
    /**
     * If true, Meraki devices will act as a RADIUS Dynamic Authorization Server and will respond to RADIUS Change-of-Authorization and Disconnect messages sent by the RADIUS server.
     */
    radiusCoaEnabled?: boolean;
    /**
     * This policy determines how authentication requests should be handled in the event that all of the configured RADIUS servers are unreachable ('Deny access' or 'Allow access')
     */
    radiusFailoverPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum;
    /**
     * Whether or not higher priority RADIUS servers should be retried after 60 seconds.
     */
    radiusFallbackEnabled?: boolean;
    /**
     * Whether or not RADIUS Guest VLAN is enabled. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode
     */
    radiusGuestVlanEnabled?: boolean;
    /**
     * VLAN ID of the RADIUS Guest VLAN. This param is only valid if the authMode is 'open-with-radius' and addressing mode is not set to 'isolated' or 'nat' mode
     */
    radiusGuestVlanId?: number;
    /**
     * This policy determines which RADIUS server will be contacted first in an authentication attempt and the ordering of any necessary retry attempts ('Strict priority order' or 'Round robin')
     */
    radiusLoadBalancingPolicy?: UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum;
    /**
     * If true, the RADIUS response can override VLAN tag. This is not valid when ipAssignmentMode is 'NAT mode'.
     */
    radiusOverride?: boolean;
    /**
     * If true, Meraki devices will proxy RADIUS messages through the Meraki cloud to the configured RADIUS auth and accounting servers.
     */
    radiusProxyEnabled?: boolean;
    /**
     * The maximum number of transmit attempts after which a RADIUS server is failed over (must be between 1-5).
     */
    radiusServerAttemptsLimit?: number;
    /**
     * The amount of time for which a RADIUS client waits for a reply from the RADIUS server (must be between 1-10 seconds).
     */
    radiusServerTimeout?: number;
    /**
     * The RADIUS 802.1X servers to be used for authentication. This param is only valid if the authMode is 'open-with-radius', '8021x-radius' or 'ipsk-with-radius'
     */
    radiusServers?: UpdateNetworkWirelessSsidRequestBodyRadiusServers[];
    /**
     * If true, Meraki devices will periodically send Access-Request messages to configured RADIUS servers using identity 'meraki_8021x_test' to ensure that the RADIUS servers are reachable.
     */
    radiusTestingEnabled?: boolean;
    /**
     * The secondary concentrator to use when the ipAssignmentMode is 'VPN'. If configured, the APs will switch to using this concentrator if the primary concentrator is unreachable. This param is optional. ('disabled' represents no secondary concentrator.)
     */
    secondaryConcentratorNetworkId?: string;
    /**
     * The SpeedBurst setting for this SSID'
     */
    speedBurst?: UpdateNetworkWirelessSsidRequestBodySpeedBurst;
    /**
     * Array of valid sponsor email domains for sponsored guest splash type.
     */
    splashGuestSponsorDomains?: string[];
    /**
     * The type of splash page for the SSID ('None', 'Click-through splash page', 'Billing', 'Password-protected with Meraki RADIUS', 'Password-protected with custom RADIUS', 'Password-protected with Active Directory', 'Password-protected with LDAP', 'SMS authentication', 'Systems Manager Sentry', 'Facebook Wi-Fi', 'Google OAuth', 'Sponsored guest', 'Cisco ISE' or 'Google Apps domain'). This attribute is not supported for template children.
     */
    splashPage?: UpdateNetworkWirelessSsidRequestBodySplashPageEnum;
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
     * Specify your walled garden by entering an array of addresses, ranges using CIDR notation, domain names, and domain wildcards (e.g. '192.168.1.1/24', '192.168.37.10/32', 'www.yahoo.com', '*.google.com']). Meraki's splash page is automatically included in your walled garden.
     */
    walledGardenRanges?: string[];
    /**
     * The types of WPA encryption. ('WPA1 only', 'WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only')
     */
    wpaEncryptionMode?: UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum;
}
export declare class UpdateNetworkWirelessSsidRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsid200ApplicationJSONObject?: Record<string, any>;
}
