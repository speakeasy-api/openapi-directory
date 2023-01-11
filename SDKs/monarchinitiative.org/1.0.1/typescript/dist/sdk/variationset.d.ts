import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VariationSet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteVariantSetItem - Deletes variant set
    **/
    deleteVariantSetItem(req: operations.DeleteVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVariantSetItemResponse>;
    /**
     * getVariantAnalyze - Returns list of matches
    **/
    getVariantAnalyze(req: operations.GetVariantAnalyzeRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantAnalyzeResponse>;
    /**
     * getVariantSetItem - Returns a variant set
    **/
    getVariantSetItem(req: operations.GetVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetItemResponse>;
    /**
     * getVariantSetsArchiveCollection - Returns list of variant sets from a specified time period
    **/
    getVariantSetsArchiveCollection(req: operations.GetVariantSetsArchiveCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetsArchiveCollectionResponse>;
    /**
     * getVariantSetsCollection - Returns list of variant sets
    **/
    getVariantSetsCollection(req: operations.GetVariantSetsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetsCollectionResponse>;
    /**
     * postVariantSetsCollection - Creates a new variant set
    **/
    postVariantSetsCollection(req: operations.PostVariantSetsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.PostVariantSetsCollectionResponse>;
    /**
     * putVariantSetItem - Updates a variant set
    **/
    putVariantSetItem(req: operations.PutVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.PutVariantSetItemResponse>;
}
