import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Config resource allows users to assign serialised configuration data to API Keys. The payloads assigned to a Config object can later be retrieved to dynamically configure your integration.
 *
 * @remarks
 *
 * Useful if you need to configure your integration remotely rather than editing code in situ.
 *
 */
export declare class Configs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create
     *
     * @remarks
     * Create a config
     */
    createConfig(req: operations.CreateConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigResponse>;
    /**
     * Delete
     *
     * @remarks
     * Permanently deletes a configuration object.
     */
    deleteConfig(req: operations.DeleteConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigResponse>;
    /**
     * List
     *
     * @remarks
     * Lists configurations associated with a key
     */
    listConfigs(req: operations.ListConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigsResponse>;
    /**
     * Retrieve
     *
     * @remarks
     * Retrieve config object by name
     */
    retrieveConfig(req: operations.RetrieveConfigRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveConfigResponse>;
    /**
     * Update
     *
     * @remarks
     * Updates configuration object
     */
    updateConfig(req: operations.UpdateConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigResponse>;
}
