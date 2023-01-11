import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Assets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTargetsTargetIdAssetsId - Delete asset
    **/
    deleteTargetsTargetIdAssetsId(req: operations.DeleteTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdAssetsIdResponse>;
    /**
     * getTargetsTargetIdAssets - List target's assets
    **/
    getTargetsTargetIdAssets(req: operations.GetTargetsTargetIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAssetsResponse>;
    /**
     * getTargetsTargetIdAssetsId - Retrieve asset
    **/
    getTargetsTargetIdAssetsId(req: operations.GetTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAssetsIdResponse>;
    /**
     * patchTargetsTargetIdAssetsId - Partial update assets
    **/
    patchTargetsTargetIdAssetsId(req: operations.PatchTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdAssetsIdResponse>;
    /**
     * postTargetsTargetIdAssets - Create new asset
    **/
    postTargetsTargetIdAssets(req: operations.PostTargetsTargetIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdAssetsResponse>;
    /**
     * postTargetsTargetIdAssetsIdVerify - Verify asset ownership
    **/
    postTargetsTargetIdAssetsIdVerify(req: operations.PostTargetsTargetIdAssetsIdVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdAssetsIdVerifyResponse>;
    /**
     * putTargetsTargetIdAssetsId - Update asset
    **/
    putTargetsTargetIdAssetsId(req: operations.PutTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdAssetsIdResponse>;
}
