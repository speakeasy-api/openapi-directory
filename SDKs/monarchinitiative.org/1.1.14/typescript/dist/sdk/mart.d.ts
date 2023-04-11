import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Perform bulk operations
 */
export declare class Mart {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bulk download of case associations
     *
     * @remarks
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
     */
    getMartCaseAssociationsResource(req: operations.GetMartCaseAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartCaseAssociationsResourceResponse>;
    /**
     * Bulk download of disease associations
     *
     * @remarks
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
     */
    getMartDiseaseAssociationsResource(req: operations.GetMartDiseaseAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartDiseaseAssociationsResourceResponse>;
    /**
     * Bulk download of gene associations
     *
     * @remarks
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
     */
    getMartGeneAssociationsResource(req: operations.GetMartGeneAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartGeneAssociationsResourceResponse>;
    /**
     * Bulk download of orthologs
     */
    getMartOrthologAssociationsResource(req: operations.GetMartOrthologAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartOrthologAssociationsResourceResponse>;
    /**
     * Bulk download of paralogs
     */
    getMartParalogAssociationsResource(req: operations.GetMartParalogAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartParalogAssociationsResourceResponse>;
}
