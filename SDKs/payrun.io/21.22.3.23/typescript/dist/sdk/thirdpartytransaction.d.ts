import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThirdPartyTransaction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteThirdPartyTransactionTag - Delete third party transaction tag
     *
     * Deletes a tag from the third party transaction
    **/
    deleteThirdPartyTransactionTag(req: operations.DeleteThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionTagResponse>;
    /**
     * getAllThirdPartyTransactionTags - Get all third party transaction tags
     *
     * Gets all the third party transaction tags
    **/
    getAllThirdPartyTransactionTags(req: operations.GetAllThirdPartyTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionTagsResponse>;
    /**
     * getAllThirdPartyTransactionsWithTag - Get links to tagged third party transactions
     *
     * Gets the third party transactions with the specified tag
    **/
    getAllThirdPartyTransactionsWithTag(req: operations.GetAllThirdPartyTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllThirdPartyTransactionsWithTagResponse>;
    /**
     * getTagFromThirdPartyTransaction - Get third party transaction tag
     *
     * Gets a tag from the third party transaction
    **/
    getTagFromThirdPartyTransaction(req: operations.GetTagFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromThirdPartyTransactionResponse>;
    /**
     * getTagsFromThirdPartyTransaction - Get tags from third party transaction
     *
     * Gets all tags from the third party transaction
    **/
    getTagsFromThirdPartyTransaction(req: operations.GetTagsFromThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromThirdPartyTransactionResponse>;
    /**
     * putThirdPartyTransactionTag - insert third party transaction tag
     *
     * Inserts a tag on the third party transaction
    **/
    putThirdPartyTransactionTag(req: operations.PutThirdPartyTransactionTagRequest, config?: AxiosRequestConfig): Promise<operations.PutThirdPartyTransactionTagResponse>;
}
