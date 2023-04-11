import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class KeyManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a key
     *
     * @remarks
     * Create a key
     */
    createAKey(req: operations.CreateAKeyRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateAKeyResponse>;
    /**
     * Delete a key
     *
     * @remarks
     * Delete a key
     */
    deleteAKey(config?: AxiosRequestConfig): Promise<operations.DeleteAKeyResponse>;
    /**
     * Get keys
     *
     * @remarks
     * Get keys
     */
    getKeys(req: operations.GetKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * Get one key
     *
     * @remarks
     * Get one key
     */
    getOneKey(config?: AxiosRequestConfig): Promise<operations.GetOneKeyResponse>;
    /**
     * Update a key
     *
     * @remarks
     * Update a key
     */
    updateAKey(req: operations.UpdateAKeyRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateAKeyResponse>;
}
