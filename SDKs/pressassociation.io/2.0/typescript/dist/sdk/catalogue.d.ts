import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Catalogue {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Catalogue Detail
     *
     * @remarks
     * Return the content of the selected catalogue.
     */
    getCatalogue(req: operations.GetCatalogueRequest, security: operations.GetCatalogueSecurity, config?: AxiosRequestConfig): Promise<operations.GetCatalogueResponse>;
    /**
     * Catalogue Asset Collection
     *
     * @remarks
     * Return the content of the selected catalogue.
     */
    getCatalogueAsset(req: operations.GetCatalogueAssetRequest, security: operations.GetCatalogueAssetSecurity, config?: AxiosRequestConfig): Promise<operations.GetCatalogueAssetResponse>;
    /**
     * Catalogue Asset Detail
     *
     * @remarks
     * Return the content of the selected catalogue asset.
     */
    getCatalogueAssetDetail(req: operations.GetCatalogueAssetDetailRequest, security: operations.GetCatalogueAssetDetailSecurity, config?: AxiosRequestConfig): Promise<operations.GetCatalogueAssetDetailResponse>;
    /**
     * Catalogue Collection
     *
     * @remarks
     * Return a collection of Catalogues.
     */
    listCatalogues(config?: AxiosRequestConfig): Promise<operations.ListCataloguesResponse>;
}
