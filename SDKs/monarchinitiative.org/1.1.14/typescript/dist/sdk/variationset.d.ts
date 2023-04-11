import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations related to sets of variants
 */
export declare class VariationSet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes variant set
     */
    deleteVariantSetItem(req: operations.DeleteVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVariantSetItemResponse>;
    /**
     * Returns list of matches
     */
    getVariantAnalyze(req: operations.GetVariantAnalyzeRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantAnalyzeResponse>;
    /**
     * Returns a variant set
     */
    getVariantSetItem(req: operations.GetVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetItemResponse>;
    /**
     * Returns list of variant sets from a specified time period
     */
    getVariantSetsArchiveCollection(req: operations.GetVariantSetsArchiveCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetsArchiveCollectionResponse>;
    /**
     * Returns list of variant sets
     */
    getVariantSetsCollection(req: operations.GetVariantSetsCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantSetsCollectionResponse>;
    /**
     * Creates a new variant set
     */
    postVariantSetsCollection(req: shared.VariantSet, config?: AxiosRequestConfig): Promise<operations.PostVariantSetsCollectionResponse>;
    /**
     * Updates a variant set
     */
    putVariantSetItem(req: operations.PutVariantSetItemRequest, config?: AxiosRequestConfig): Promise<operations.PutVariantSetItemResponse>;
}
