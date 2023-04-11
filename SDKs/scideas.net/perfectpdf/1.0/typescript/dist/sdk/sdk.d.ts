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
 * The perfectpdf api does one thing, perfectly: it converts html to pdf. The perfectpdf api uses headless Google Chrome to provide a low cost, high quality, simple to use service.
 *
 * @see {@link https://services.scideas.net/perfectpdf}
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
     * Returns PDF document.
     */
    postPerfectpdfApi(req: shared.PerfectpdfApiBody, config?: AxiosRequestConfig): Promise<operations.PostPerfectpdfApiResponse>;
}
