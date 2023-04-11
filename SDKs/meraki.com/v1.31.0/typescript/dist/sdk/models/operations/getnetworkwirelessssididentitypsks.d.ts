import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSsidIdentityPsksRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidIdentityPsks200ApplicationJSON extends SpeakeasyBase {
    /**
     * The email associated with the System's Manager User
     */
    email?: string;
    /**
     * Optional timestamp for when the Identity PSK expires.
     */
    expiresAt?: string;
    /**
     * The group policy to be applied to clients
     */
    groupPolicyId?: string;
    /**
     * The unique identifier of the Identity PSK
     */
    id?: string;
    /**
     * The name of the Identity PSK
     */
    name?: string;
    /**
     * The passphrase for client authentication
     */
    passphrase?: string;
    /**
     * The WiFi Personal Network unique identifier
     */
    wifiPersonalNetworkId?: string;
}
export declare class GetNetworkWirelessSsidIdentityPsksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects?: GetNetworkWirelessSsidIdentityPsks200ApplicationJSON[];
}
