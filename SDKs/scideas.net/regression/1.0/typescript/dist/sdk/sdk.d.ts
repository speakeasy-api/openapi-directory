import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://services.scideas.net"];
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
 * This data processing api uses regression analysis to allow you to find out which contributing variables have the most effect on an outcome. For example does buyer location or price most effect sales ?
 *
 * @see {@link https://services.scideas.net/regression}
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
     * Returns regression analysis.
     */
    postRegressionApi(req: shared.RegressionApiBody, config?: AxiosRequestConfig): Promise<operations.PostRegressionApiResponse>;
}
