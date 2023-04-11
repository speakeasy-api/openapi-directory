import { FraudManagement } from "./fraudmanagement";
import * as operations from "./models/operations";
import { Requests } from "./requests";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/verify"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * The Verify API helps you to implement 2FA (two-factor authentication) in your applications. This is useful for:
 *
 * @remarks
 *
 * * Protecting against spam, by preventing spammers from creating multiple accounts
 * * Monitoring suspicious activity, by forcing an account user to verify ownership of a number
 * * Ensuring that you can reach your users at any time because you have their correct phone number
 * More information is available at <https://developer.nexmo.com/verify>
 *
 * @see {@link https://developer.nexmo.com/verify} - More information on the Verify product on our Developer Portal
 */
export declare class SDK {
    /**
     * Fraud Management
     */
    fraudManagement: FraudManagement;
    /**
     * Verify Requests
     */
    requests: Requests;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Verify Check
     *
     * @remarks
     * Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
     *
     * 1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
     * 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
     *
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
     */
    verifyCheck(req: operations.VerifyCheckRequest, config?: AxiosRequestConfig): Promise<operations.VerifyCheckResponse>;
    /**
     * Verify Control
     *
     * @remarks
     * Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
     *
     *
     * 1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
     *
     * 2. Check the `status` in the response.
     *
     *
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
     */
    verifyControl(req: operations.VerifyControlRequest, config?: AxiosRequestConfig): Promise<operations.VerifyControlResponse>;
    /**
     * PSD2 (Payment Services Directive 2) Request
     *
     * @remarks
     * Use Verify request to generate and send a PIN to your user to authorize a payment:
     * 1. Create a request to send a verification code to your user.
     * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
     * 3. Use the `request_id` field in the response for the Verify check.
     * (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
     */
    verifyRequestWithPsd2(req: operations.VerifyRequestWithPsd2Request, config?: AxiosRequestConfig): Promise<operations.VerifyRequestWithPsd2Response>;
    /**
     * Verify Search
     *
     * @remarks
     * Use Verify search to check the status of past or current verification requests:
     *
     * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
     * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
     *
     * *Note that this endpoint is available by `POST` request as well as `GET`.*
     */
    verifySearch(req: operations.VerifySearchRequest, config?: AxiosRequestConfig): Promise<operations.VerifySearchResponse>;
}
