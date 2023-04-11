import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://stellastra.com/api/"];
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
 * Stellastra makes it easy to get reviews for your cybersecurity solution in real-time with its platform-agnostic REST API.
 *
 * @see {@link https://stellastra.com/docs/api} - Stellastra is a simple API which allows you to easily generate star ratings and reviews for your cybersecurity solution.
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
     * Posts the user's review to Stellastra
     *
     * @see {@link https://stellastra.com/docs/api}
     */
    postPostReview(req: operations.PostPostReviewRequest, config?: AxiosRequestConfig): Promise<operations.PostPostReviewResponse>;
}
