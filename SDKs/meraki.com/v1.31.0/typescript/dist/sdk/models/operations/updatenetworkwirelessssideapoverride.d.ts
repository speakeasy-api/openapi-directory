import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * EAPOL Key settings.
 */
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey extends SpeakeasyBase {
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
 * EAP settings for identity requests.
 */
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity extends SpeakeasyBase {
    /**
     * Maximum number of EAP retries.
     */
    retries?: number;
    /**
     * EAP timeout in seconds.
     */
    timeout?: number;
}
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBody extends SpeakeasyBase {
    /**
     * EAPOL Key settings.
     */
    eapolKey?: UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
    /**
     * EAP settings for identity requests.
     */
    identity?: UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
    /**
     * Maximum number of general EAP retries.
     */
    maxRetries?: number;
    /**
     * General EAP timeout in seconds.
     */
    timeout?: number;
}
export declare class UpdateNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidEapOverrideRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidEapOverride200ApplicationJSONObject?: Record<string, any>;
}
