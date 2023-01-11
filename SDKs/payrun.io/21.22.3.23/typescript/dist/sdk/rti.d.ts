import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rti {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRtiTransaction - Delete the RTI transaction
     *
     * Deletes the specified RTI transaction
    **/
    deleteRtiTransaction(req: operations.DeleteRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionResponse>;
    /**
     * getAllRtiTransactionTags - Get all RTI transaction tags
     *
     * Gets all the RTI transaction tags
    **/
    getAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * getRtiTransactionFromEmployer - Get the RTI transaction
     *
     * Returns the specified RTI transaction
    **/
    getRtiTransactionFromEmployer(req: operations.GetRtiTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionFromEmployerResponse>;
    /**
     * getRtiTransactionsFromEmployer - Get all RTI transactions for the employer
     *
     * Get links for all RTI transactions for the specified employer
    **/
    getRtiTransactionsFromEmployer(req: operations.GetRtiTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsFromEmployerResponse>;
    /**
     * getRtiTransactionsWithTag - Get RTI transactions with tag
     *
     * Gets the RTI transactions with the tag
    **/
    getRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
}
