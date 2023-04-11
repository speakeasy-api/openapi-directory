import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi global configuration
 */
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the full configuration of Otoroshi
     *
     * @remarks
     * Get the full configuration of Otoroshi
     */
    globalConfig(config?: AxiosRequestConfig): Promise<operations.GlobalConfigResponse>;
    /**
     * Update the global configuration with a diff
     *
     * @remarks
     * Update the global configuration with a diff
     */
    patchGlobalConfig(req: shared.Patch[], security: operations.PatchGlobalConfigSecurity, config?: AxiosRequestConfig): Promise<operations.PatchGlobalConfigResponse>;
    /**
     * Update the global configuration
     *
     * @remarks
     * Update the global configuration
     */
    putGlobalConfig(req: shared.GlobalConfig, security: operations.PutGlobalConfigSecurity, config?: AxiosRequestConfig): Promise<operations.PutGlobalConfigResponse>;
}
