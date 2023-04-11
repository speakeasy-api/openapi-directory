import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://ev.apis.paypi.dev"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * OTP email verification API by PayPI. <br/><br/>
 *
 * @remarks
 * EmailVerify provides a simple way to verify email addresses. We send emails ourselves taking the burden of setting up email systems and tracking codes. <br/><br/>
 * To learn more about this API, check out [EmailVerify documentation](https://emailverify.paypi.dev/) <br/><br/>
 *
 * ## Authentication
 * All requests to the EmailVerify API must be authenticated with an API Key. To get an API key, subscribe to the EmailVerify [here](https://app.paypi.dev/subscribe/c2VydmljZTo1OGQxZDNmMy05OWQ5LTQ3ZjYtOWJkNi02OWNkMTY1OGFmOWU=).  \
 * Set your `Authorization` header to `Bearer YOUR-API-KEY`.
 * ```
 * curl
 * -H "Content-Type: application/json" \
 * -H "Authorization: Bearer YOUR-API-KEY" \
 * ...
 * ```
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Check verification code
     *
     * @remarks
     * Checks the user's emailed code is valid.
     * If this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.
     *
     */
    postCheckCode(req: operations.PostCheckCodeRequestBody, config?: AxiosRequestConfig): Promise<operations.PostCheckCodeResponse>;
    /**
     * Send verification code
     *
     * @remarks
     * This request send's a code to the given email address, which should be returned to check it is correct.
     */
    postSendCode(req: operations.PostSendCodeRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSendCodeResponse>;
}
