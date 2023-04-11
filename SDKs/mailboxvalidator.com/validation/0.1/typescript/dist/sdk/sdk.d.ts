import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.mailboxvalidator.com"];
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
 * The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format. Refer to https://www.mailboxvalidator.com for further information.
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
     * The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.
     */
    getV1ValidationSingle(req: operations.GetV1ValidationSingleRequest, config?: AxiosRequestConfig): Promise<operations.GetV1ValidationSingleResponse>;
}
