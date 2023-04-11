import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `keys` resource contains the access keys used to authenticate requests to this API.
 *
 * @remarks
 *
 * Note that this resource is only accessible for administrator users logged into the Brain Management Console.
 * It is not possible to access this resource using API key authentication.
 * This resource is therefore irrelevant to most applications.
 *
 */
export declare class Keys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create key
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    addKey(req: shared.KeyInput, security: operations.AddKeySecurity, config?: AxiosRequestConfig): Promise<operations.AddKeyResponse>;
    /**
     * Delete key
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    deleteKey(req: operations.DeleteKeyRequest, security: operations.DeleteKeySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteKeyResponse>;
    /**
     * Get key
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    getKeyById(req: operations.GetKeyByIdRequest, security: operations.GetKeyByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeyByIdResponse>;
    /**
     * Get all keys
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    getKeys(req: operations.GetKeysRequest, security: operations.GetKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * Update existing key
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    updateKey(req: operations.UpdateKeyRequest, security: operations.UpdateKeySecurity, config?: AxiosRequestConfig): Promise<operations.UpdateKeyResponse>;
}
