import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi Snow Monkey
 */
export declare class Snowmonkey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get current Snow Monkey config
     *
     * @remarks
     * Get current Snow Monkey config
     */
    getSnowMonkeyConfig(config?: AxiosRequestConfig): Promise<operations.GetSnowMonkeyConfigResponse>;
    /**
     * Get all current Snow Monkey ourages
     *
     * @remarks
     * Get all current Snow Monkey ourages
     */
    getSnowMonkeyOutages(config?: AxiosRequestConfig): Promise<operations.GetSnowMonkeyOutagesResponse>;
    /**
     * Update current Snow Monkey config
     *
     * @remarks
     * Update current Snow Monkey config
     */
    patchSnowMonkey(req: shared.Group, security: operations.PatchSnowMonkeySecurity, config?: AxiosRequestConfig): Promise<operations.PatchSnowMonkeyResponse>;
    /**
     * Reset Snow Monkey Outages for the day
     *
     * @remarks
     * Reset Snow Monkey Outages for the day
     */
    resetSnowMonkey(config?: AxiosRequestConfig): Promise<operations.ResetSnowMonkeyResponse>;
    /**
     * Start the Snow Monkey
     *
     * @remarks
     * Start the Snow Monkey
     */
    startSnowMonkey(config?: AxiosRequestConfig): Promise<operations.StartSnowMonkeyResponse>;
    /**
     * Stop the Snow Monkey
     *
     * @remarks
     * Stop the Snow Monkey
     */
    stopSnowMonkey(config?: AxiosRequestConfig): Promise<operations.StopSnowMonkeyResponse>;
    /**
     * Update current Snow Monkey config
     *
     * @remarks
     * Update current Snow Monkey config
     */
    updateSnowMonkey(req: shared.Group, security: operations.UpdateSnowMonkeySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSnowMonkeyResponse>;
}
