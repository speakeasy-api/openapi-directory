import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * User type to be authorized (usually 'customer')
 */
export declare enum AuthorizeRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
/**
 * Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
 */
export declare enum AuthorizeResponseTypeEnum {
    Code = "code"
}
export declare class AuthorizeRequest extends SpeakeasyBase {
    /**
     * Client ID (Consumer Key) of your application
     */
    clientId: string;
    /**
     * User type to be authorized (usually 'customer')
     */
    realm?: AuthorizeRealmEnum;
    /**
     * The callback URI to send the request to after authorization; must use a host name that is registered with your application
     */
    redirectUri: string;
    /**
     * Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
     */
    responseType: AuthorizeResponseTypeEnum;
    /**
     * Space-separated list of scopes to be authorized
     */
    scope?: string;
    /**
     * Unique value used by the calling app to verify the request
     */
    state: string;
}
export declare class AuthorizeResponse extends SpeakeasyBase {
    /**
     * Redirect user to authenticate with Shutterstock
     */
    authorizeResponse?: string;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
