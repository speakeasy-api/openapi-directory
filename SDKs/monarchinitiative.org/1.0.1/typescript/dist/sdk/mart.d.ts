import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mart {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMartCaseAssociationsResource - Bulk download of case associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    getMartCaseAssociationsResource(req: operations.GetMartCaseAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartCaseAssociationsResourceResponse>;
    /**
     * getMartDiseaseAssociationsResource - Bulk download of disease associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    getMartDiseaseAssociationsResource(req: operations.GetMartDiseaseAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartDiseaseAssociationsResourceResponse>;
    /**
     * getMartGeneAssociationsResource - Bulk download of gene associations
     *
     * NOTE: this route has a limiter on it, you may be restricted in the number of downloads per hour. Use carefully.
    **/
    getMartGeneAssociationsResource(req: operations.GetMartGeneAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartGeneAssociationsResourceResponse>;
    /**
     * getMartOrthologAssociationsResource - Bulk download of orthologs
    **/
    getMartOrthologAssociationsResource(req: operations.GetMartOrthologAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartOrthologAssociationsResourceResponse>;
    /**
     * getMartParalogAssociationsResource - Bulk download of paralogs
    **/
    getMartParalogAssociationsResource(req: operations.GetMartParalogAssociationsResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetMartParalogAssociationsResourceResponse>;
}
