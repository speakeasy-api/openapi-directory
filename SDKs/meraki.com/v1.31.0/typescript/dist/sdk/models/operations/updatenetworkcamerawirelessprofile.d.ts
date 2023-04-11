import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
 */
export declare class UpdateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
    /**
     * The password of the identity.
     */
    password?: string;
    /**
     * The username of the identity.
     */
    username?: string;
}
/**
 * The auth mode of the SSID. It can be set to ('psk', '8021x-radius').
 */
export declare enum UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    EightThousandAndTwentyOnexRadius = "8021x-radius",
    Psk = "psk"
}
/**
 * The details of the SSID config.
 */
export declare class UpdateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
    /**
     * The auth mode of the SSID. It can be set to ('psk', '8021x-radius').
     */
    authMode?: UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
    /**
     * The encryption mode of the SSID. It can be set to ('wpa', 'wpa-eap'). With 'wpa' mode, the authMode should be 'psk' and with 'wpa-eap' the authMode should be '8021x-radius'
     */
    encryptionMode?: string;
    /**
     * The name of the SSID.
     */
    name?: string;
    /**
     * The pre-shared key of the SSID.
     */
    psk?: string;
}
export declare class UpdateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
    /**
     * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
     */
    identity?: UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
    /**
     * The name of the camera wireless profile.
     */
    name?: string;
    /**
     * The details of the SSID config.
     */
    ssid?: UpdateNetworkCameraWirelessProfileRequestBodySsid;
}
export declare class UpdateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkCameraWirelessProfileRequestBody;
    networkId: string;
    wirelessProfileId: string;
}
export declare class UpdateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkCameraWirelessProfile200ApplicationJSONObject?: Record<string, any>;
}
