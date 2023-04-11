import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectSecurity extends SpeakeasyBase {
    authHeader: string;
    clientId: string;
}
export declare class GetConnectRequest extends SpeakeasyBase {
    /**
     * The client id belonging to your application
     */
    clientId: string;
    /**
     * The redirect uri you have configured for your application
     */
    redirectUri: string;
    /**
     * It's recommended to use "code" here
     */
    responseType: shared.ResponseTypeEnum;
    /**
     * Scope
     */
    scope: string;
    /**
     * Any value included here will be appended to the redirect URI. Use this for CSRF protection.
     */
    state?: string;
}
export declare class GetConnectResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Found
     */
    getConnect302ApplicationJSONString?: string;
}
