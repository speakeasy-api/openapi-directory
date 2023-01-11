import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Targets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTargetsId - Delete target
    **/
    deleteTargetsId(req: operations.DeleteTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsIdResponse>;
    /**
     * getTargets - List targets
    **/
    getTargets(req: operations.GetTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsResponse>;
    /**
     * getTargetsId - Retrieve target
    **/
    getTargetsId(req: operations.GetTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsIdResponse>;
    /**
     * patchTargetsId - Partial update target
    **/
    patchTargetsId(req: operations.PatchTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsIdResponse>;
    /**
     * postTargets - Create target
    **/
    postTargets(req: operations.PostTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsResponse>;
    /**
     * putTargetsId - Update target
    **/
    putTargetsId(req: operations.PutTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsIdResponse>;
}
