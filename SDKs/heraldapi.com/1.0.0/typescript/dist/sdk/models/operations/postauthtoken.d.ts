import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthTokenRequestBody extends SpeakeasyBase {
    /**
     * Your Herald API key. This should have been provided to you by a member of the Herald team.
     */
    apiKey: string;
}
/**
 * OK
 */
export declare class PostAuthToken200ApplicationJSON extends SpeakeasyBase {
    /**
     * An expiring access token that can be used as a bearer token for all auth-protected Herald endpoints.
     */
    accessToken: string;
    /**
     * Timestamp at which the provided access token will expire, in seconds since Unix epoch.
     */
    expiresAt: number;
}
export declare class PostAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAuthToken200ApplicationJSONObject?: PostAuthToken200ApplicationJSON;
}
