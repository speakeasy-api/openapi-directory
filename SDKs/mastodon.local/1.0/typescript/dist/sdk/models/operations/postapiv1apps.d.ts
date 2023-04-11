import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AppsRequestBody extends SpeakeasyBase {
    /**
     * A name for your application
     */
    clientName: string;
    /**
     * Where the user should be redirected after authorization. To display the authorization code to the user instead of redirecting to a web page, use urn:ietf:wg:oauth:2.0:oob in this parameter.
     */
    redirectUris: string;
    /**
     * Space separated list of scopes. If none is provided, defaults to read.
     */
    scopes?: string;
    /**
     * A URL to the homepage of your app
     */
    website?: string;
}
/**
 * Success
 */
export declare class PostApiV1Apps200ApplicationJSON extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    id?: string;
    name?: string;
    redirectUri?: string;
    vapidKey?: string;
    website?: string;
}
export declare class PostApiV1AppsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If a required parameter is missing or improperly formatted, the request will fail.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    postApiV1Apps200ApplicationJSONObject?: PostApiV1Apps200ApplicationJSON;
}
