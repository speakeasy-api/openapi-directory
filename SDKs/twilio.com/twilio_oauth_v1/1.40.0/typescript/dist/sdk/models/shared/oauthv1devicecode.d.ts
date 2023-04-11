import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class OauthV1DeviceCode extends SpeakeasyBase {
    /**
     * The device verification code.
     */
    deviceCode?: string;
    /**
     * The expiration time of the device_code and user_code in seconds.
     */
    expiresIn?: number;
    /**
     * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint.
     */
    interval?: number;
    /**
     * The verification code which end user uses to verify authorization request.
     */
    userCode?: string;
    /**
     * The URI that the end user visits to verify authorization request.
     */
    verificationUri?: string;
    /**
     * The URI with user_code that the end-user alternatively visits to verify authorization request.
     */
    verificationUriComplete?: string;
}
