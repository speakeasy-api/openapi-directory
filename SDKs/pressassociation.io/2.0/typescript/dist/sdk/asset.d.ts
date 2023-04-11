import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Asset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Asset Detail
     *
     * @remarks
     * Return the content of the selected asset.
     */
    getAsset(req: operations.GetAssetRequest, security: operations.GetAssetSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * Asset Contributors
     *
     * @remarks
     * Return the contributors of the selected asset.
     */
    getAssetContributors(req: operations.GetAssetContributorsRequest, security: operations.GetAssetContributorsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAssetContributorsResponse>;
    /**
     * Asset Collection
     *
     * @remarks
     * Return a collection of Assets.
     */
    listAssets(req: operations.ListAssetsRequest, security: operations.ListAssetsSecurity, config?: AxiosRequestConfig): Promise<operations.ListAssetsResponse>;
}
