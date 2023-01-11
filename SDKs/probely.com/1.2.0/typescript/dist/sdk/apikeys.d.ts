import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteKeysId - Delete account API key
    **/
    deleteKeysId(req: operations.DeleteKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeysIdResponse>;
    /**
     * deleteTargetsTargetIdKeysId - Delete target API key
    **/
    deleteTargetsTargetIdKeysId(req: operations.DeleteTargetsTargetIdKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdKeysIdResponse>;
    /**
     * getKeys - List API keys allowed to operate on account
    **/
    getKeys(req: operations.GetKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * getKeysId - Retrieve account API key
    **/
    getKeysId(req: operations.GetKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysIdResponse>;
    /**
     * getTargetsTargetIdKeys - List target specific API keys
    **/
    getTargetsTargetIdKeys(req: operations.GetTargetsTargetIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdKeysResponse>;
    /**
     * getTargetsTargetIdKeysId - Retrieve target API key
    **/
    getTargetsTargetIdKeysId(req: operations.GetTargetsTargetIdKeysIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdKeysIdResponse>;
    /**
     * postKeys - Create account API key
    **/
    postKeys(req: operations.PostKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostKeysResponse>;
    /**
     * postTargetsTargetIdKeys - Create target API key
    **/
    postTargetsTargetIdKeys(req: operations.PostTargetsTargetIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdKeysResponse>;
}
