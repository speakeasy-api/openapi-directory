import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceSsidRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkApplianceSsid200ApplicationJSONRadiusServers extends SpeakeasyBase {
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
export declare class GetNetworkApplianceSsid200ApplicationJSON extends SpeakeasyBase {
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
    radiusServers?: GetNetworkApplianceSsid200ApplicationJSONRadiusServers[];
    /**
     * Boolean indicating whether the MX should advertise or hide this SSID.
     */
    visible?: boolean;
    /**
     * WPA encryption mode for the SSID.
     */
    wpaEncryptionMode?: string;
}
export declare class GetNetworkApplianceSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceSsid200ApplicationJSONObject?: GetNetworkApplianceSsid200ApplicationJSON;
}
