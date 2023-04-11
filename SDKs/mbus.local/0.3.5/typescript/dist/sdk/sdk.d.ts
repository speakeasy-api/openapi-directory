import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://mbus.local", "/"];
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
     * Gets data from the slave identified by {address}
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Gets data from the slave identified by {address}, and supports multiple responses from the slave
     */
    getMulti(req: operations.GetMultiRequest, config?: AxiosRequestConfig): Promise<operations.GetMultiResponse>;
    /**
     * Gets Raspberry Pi Hat information
     */
    hat(config?: AxiosRequestConfig): Promise<operations.HatResponse>;
    /**
     * Turns off power to the M-Bus
     */
    hatOff(config?: AxiosRequestConfig): Promise<operations.HatOffResponse>;
    /**
     * Turns on power to the M-Bus
     */
    hatOn(config?: AxiosRequestConfig): Promise<operations.HatOnResponse>;
    /**
     * Returns this API specification
     */
    mbusApi(config?: AxiosRequestConfig): Promise<operations.MbusApiResponse>;
    /**
     * Scan the specified device for slaves
     */
    scan(req: operations.ScanRequest, config?: AxiosRequestConfig): Promise<operations.ScanResponse>;
}
