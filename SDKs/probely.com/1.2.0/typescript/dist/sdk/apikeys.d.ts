import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * API keys allow you to perform operations without using your regular user.
 *
 * @remarks
 * There are two endpoints for API keys:
 *   * one to create keys that can only access the current scope;
 *   * one that allows the user to perform operations like creating targets.
 *
 */
export declare class APIKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete account API key
     */
    deleteKeysId(req: operations.DeleteKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeysIdResponse>;
    /**
     * Delete target API key
     */
    deleteTargetsTargetIdKeysId(req: operations.DeleteTargetsTargetIdKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdKeysIdResponse>;
    /**
     * List API keys allowed to operate on account
     */
    getKeys(req: operations.GetKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * Retrieve account API key
     */
    getKeysId(req: operations.GetKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysIdResponse>;
    /**
     * List target specific API keys
     */
    getTargetsTargetIdKeys(req: operations.GetTargetsTargetIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdKeysResponse>;
    /**
     * Retrieve target API key
     */
    getTargetsTargetIdKeysId(req: operations.GetTargetsTargetIdKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdKeysIdResponse>;
    /**
     * Create account API key
     */
    postKeys(req: shared.APIKeyInput, config?: AxiosRequestConfig): Promise<operations.PostKeysResponse>;
    /**
     * Create target API key
     */
    postTargetsTargetIdKeys(req: operations.PostTargetsTargetIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdKeysResponse>;
}
