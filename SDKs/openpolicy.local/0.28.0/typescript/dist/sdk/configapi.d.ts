import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConfigAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get configurations
     *
     * @remarks
     * This API endpoint responds with active configuration (result response)
     *
     * ---
     * **Note**
     * The `credentials` field in the `services` configuration and
     *
     * The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response
     *
     * ---
     */
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
}
