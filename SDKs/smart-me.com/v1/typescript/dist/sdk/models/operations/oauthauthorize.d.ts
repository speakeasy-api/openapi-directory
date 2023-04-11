import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OAuthAuthorizeRequest extends SpeakeasyBase {
    clientId: string;
    clientSecret?: string;
    redirectUri: string;
    scope?: string;
    state: string;
}
export declare class OAuthAuthorizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    object?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
