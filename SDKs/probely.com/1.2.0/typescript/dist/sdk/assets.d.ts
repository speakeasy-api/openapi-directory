import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Other resources a scan required access to (e.g. the domain where an
 *
 * @remarks
 * API is being served) should be added here.
 * You can also configure custom headers and cookies for each asset.
 *
 */
export declare class Assets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete asset
     */
    deleteTargetsTargetIdAssetsId(req: operations.DeleteTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsTargetIdAssetsIdResponse>;
    /**
     * List target's assets
     */
    getTargetsTargetIdAssets(req: operations.GetTargetsTargetIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAssetsResponse>;
    /**
     * Retrieve asset
     */
    getTargetsTargetIdAssetsId(req: operations.GetTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsTargetIdAssetsIdResponse>;
    /**
     * Partial update assets
     */
    patchTargetsTargetIdAssetsId(req: operations.PatchTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsTargetIdAssetsIdResponse>;
    /**
     * Create new asset
     */
    postTargetsTargetIdAssets(req: operations.PostTargetsTargetIdAssetsRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdAssetsResponse>;
    /**
     * Verify asset ownership
     */
    postTargetsTargetIdAssetsIdVerify(req: operations.PostTargetsTargetIdAssetsIdVerifyRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetsTargetIdAssetsIdVerifyResponse>;
    /**
     * Update asset
     */
    putTargetsTargetIdAssetsId(req: operations.PutTargetsTargetIdAssetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsTargetIdAssetsIdResponse>;
}
