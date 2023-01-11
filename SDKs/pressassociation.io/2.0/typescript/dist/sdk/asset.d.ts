import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Asset {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAsset - Asset Detail
     *
     * Return the content of the selected asset.
    **/
    getAsset(req: operations.GetAssetRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetResponse>;
    /**
     * getAssetContributors - Asset Contributors
     *
     * Return the contributors of the selected asset.
    **/
    getAssetContributors(req: operations.GetAssetContributorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAssetContributorsResponse>;
    /**
     * listAssets - Asset Collection
     *
     * Return a collection of Assets.
    **/
    listAssets(req: operations.ListAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetsResponse>;
}
