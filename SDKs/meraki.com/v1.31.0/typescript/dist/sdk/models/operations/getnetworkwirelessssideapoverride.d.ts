import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
    networkId: string;
    number: string;
}
/**
 * EAPOL Key settings.
 */
export declare class GetNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey extends SpeakeasyBase {
    /**
     * Maximum number of EAPOL key retries.
     */
    retries?: number;
    /**
     * EAPOL Key timeout in milliseconds.
     */
    timeoutInMs?: number;
}
/**
 * EAPOL Key settings.
 */
export declare class GetNetworkWirelessSsidEapOverride200ApplicationJSONIdentity extends SpeakeasyBase {
    /**
     * Maximum number of EAP retries.
     */
    retries?: number;
    /**
     * EAP timeout in seconds.
     */
    timeout?: number;
}
/**
 * Successful operation
 */
export declare class GetNetworkWirelessSsidEapOverride200ApplicationJSON extends SpeakeasyBase {
    /**
     * EAPOL Key settings.
     */
    eapolKey?: GetNetworkWirelessSsidEapOverride200ApplicationJSONEapolKey;
    /**
     * EAPOL Key settings.
     */
    identity?: GetNetworkWirelessSsidEapOverride200ApplicationJSONIdentity;
    /**
     * Maximum number of general EAP retries.
     */
    maxRetries?: number;
    /**
     * General EAP timeout in seconds.
     */
    timeout?: number;
}
export declare class GetNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSsidEapOverride200ApplicationJSONObject?: GetNetworkWirelessSsidEapOverride200ApplicationJSON;
}
