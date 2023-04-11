import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The association control method for the SSID ('open', 'psk', '8021x-meraki' or '8021x-radius').
 */
export declare enum UpdateNetworkApplianceSsidRequestBodyAuthModeEnum {
    EightThousandAndTwentyOnexMeraki = "8021x-meraki",
    EightThousandAndTwentyOnexRadius = "8021x-radius",
    Open = "open",
    Psk = "psk"
}
/**
 * DHCP Enforced Deauthentication enables the disassociation of wireless clients in addition to Mandatory DHCP. This param is only valid on firmware versions >= MX 17.0 where the associated LAN has Mandatory DHCP Enabled
 */
export declare class UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication extends SpeakeasyBase {
    /**
     * Enable DCHP Enforced Deauthentication on the SSID.
     */
    enabled?: boolean;
}
/**
 * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'.
 */
export declare enum UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum {
    Wep = "wep",
    Wpa = "wpa"
}
export declare class UpdateNetworkApplianceSsidRequestBodyRadiusServers extends SpeakeasyBase {
    /**
     * The IP address of your RADIUS server.
     */
    host?: string;
    /**
     * The UDP port your RADIUS servers listens on for Access-requests.
     */
    port?: number;
    /**
     * The RADIUS client shared secret.
     */
    secret?: string;
}
/**
 * The types of WPA encryption. ('WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only'). This param is only valid if (1) the authMode is 'psk' & the encryptionMode is 'wpa' OR (2) the authMode is '8021x-meraki' OR (3) the authMode is '8021x-radius'
 */
export declare enum UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum {
    Wpa1AndWpa2 = "WPA1 and WPA2",
    Wpa2Only = "WPA2 only",
    Wpa3TransitionMode = "WPA3 Transition Mode",
    Wpa3Only = "WPA3 only"
}
export declare class UpdateNetworkApplianceSsidRequestBody extends SpeakeasyBase {
    /**
     * The association control method for the SSID ('open', 'psk', '8021x-meraki' or '8021x-radius').
     */
    authMode?: UpdateNetworkApplianceSsidRequestBodyAuthModeEnum;
    /**
     * The VLAN ID of the VLAN associated to this SSID. This parameter is only valid if the network is in routed mode.
     */
    defaultVlanId?: number;
    /**
     * DHCP Enforced Deauthentication enables the disassociation of wireless clients in addition to Mandatory DHCP. This param is only valid on firmware versions >= MX 17.0 where the associated LAN has Mandatory DHCP Enabled
     */
    dhcpEnforcedDeauthentication?: UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication;
    /**
     * Whether or not the SSID is enabled.
     */
    enabled?: boolean;
    /**
     * The psk encryption mode for the SSID ('wep' or 'wpa'). This param is only valid if the authMode is 'psk'.
     */
    encryptionMode?: UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnum;
    /**
     * The name of the SSID.
     */
    name?: string;
    /**
     * The passkey for the SSID. This param is only valid if the authMode is 'psk'.
     */
    psk?: string;
    /**
     * The RADIUS 802.1x servers to be used for authentication. This param is only valid if the authMode is '8021x-radius'.
     */
    radiusServers?: UpdateNetworkApplianceSsidRequestBodyRadiusServers[];
    /**
     * Boolean indicating whether the MX should advertise or hide this SSID.
     */
    visible?: boolean;
    /**
     * The types of WPA encryption. ('WPA1 and WPA2', 'WPA2 only', 'WPA3 Transition Mode' or 'WPA3 only'). This param is only valid if (1) the authMode is 'psk' & the encryptionMode is 'wpa' OR (2) the authMode is '8021x-meraki' OR (3) the authMode is '8021x-radius'
     */
    wpaEncryptionMode?: UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnum;
}
export declare class UpdateNetworkApplianceSsidRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceSsidRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkApplianceSsid200ApplicationJSONRadiusServers extends SpeakeasyBase {
    /**
     * The IP address of your RADIUS server.
     */
    host?: string;
    /**
     * The UDP port your RADIUS servers listens on for Access-requests.
     */
    port?: number;
}
/**
 * Successful operation
 */
export declare class UpdateNetworkApplianceSsid200ApplicationJSON extends SpeakeasyBase {
    /**
     * The association control method for the SSID.
     */
    authMode?: string;
    /**
     * The VLAN ID of the VLAN associated to this SSID.
     */
    defaultVlanId?: number;
    /**
     * Whether or not the SSID is enabled.
     */
    enabled?: boolean;
    /**
     * The psk encryption mode for the SSID.
     */
    encryptionMode?: string;
    /**
     * The name of the SSID.
     */
    name?: string;
    /**
     * The number of the SSID.
     */
    number?: number;
    /**
     * The RADIUS 802.1x servers to be used for authentication.
     */
    radiusServers?: UpdateNetworkApplianceSsid200ApplicationJSONRadiusServers[];
    /**
     * Boolean indicating whether the MX should advertise or hide this SSID.
     */
    visible?: boolean;
    /**
     * WPA encryption mode for the SSID.
     */
    wpaEncryptionMode?: string;
}
export declare class UpdateNetworkApplianceSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceSsid200ApplicationJSONObject?: UpdateNetworkApplianceSsid200ApplicationJSON;
}
