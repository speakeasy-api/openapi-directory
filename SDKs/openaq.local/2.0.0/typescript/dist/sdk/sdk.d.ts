import * as operations from "./models/operations";
import { V1 } from "./v1";
import { V2 } from "./v2";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://openaq.local"];
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
 * API for OpenAQ LCS
 */
export declare class SDK {
    v1: V1;
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Favico
     */
    favicoFaviconIcoGet(config?: AxiosRequestConfig): Promise<operations.FavicoFaviconIcoGetResponse>;
    /**
     * Pong
     *
     * @remarks
     * Sanity check.
     * This will let the user know that the service is operational.
     * And this path operation will:
     * * show a lifesign
     */
    pongPingGet(config?: AxiosRequestConfig): Promise<operations.PongPingGetResponse>;
}
