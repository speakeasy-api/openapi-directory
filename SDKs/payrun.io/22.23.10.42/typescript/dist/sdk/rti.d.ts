import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Rti {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the RTI transaction
     *
     * @remarks
     * Deletes the specified RTI transaction
     */
    deleteRtiTransaction(req: operations.DeleteRtiTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiTransactionResponse>;
    /**
     * Get all RTI transaction tags
     *
     * @remarks
     * Gets all the RTI transaction tags
     */
    getAllRtiTransactionTags(req: operations.GetAllRtiTransactionTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllRtiTransactionTagsResponse>;
    /**
     * Get the RTI transaction
     *
     * @remarks
     * Returns the specified RTI transaction
     */
    getRtiTransactionFromEmployer(req: operations.GetRtiTransactionFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionFromEmployerResponse>;
    /**
     * Get all RTI transaction summaries for the employer
     *
     * @remarks
     * Get links for all RTI transaction summaries for the specified employer
     */
    getRtiTransactionSummariesFromEmployer(req: operations.GetRtiTransactionSummariesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionSummariesFromEmployerResponse>;
    /**
     * Get the RTI transaction summary
     *
     * @remarks
     * Returns the specified RTI transaction summary data excluding some poroperties
     */
    getRtiTransactionSummaryFromEmployer(req: operations.GetRtiTransactionSummaryFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionSummaryFromEmployerResponse>;
    /**
     * Get all RTI transactions for the employer
     *
     * @remarks
     * Get links for all RTI transactions for the specified employer
     */
    getRtiTransactionsFromEmployer(req: operations.GetRtiTransactionsFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsFromEmployerResponse>;
    /**
     * Get RTI transactions with tag
     *
     * @remarks
     * Gets the RTI transactions with the tag
     */
    getRtiTransactionsWithTag(req: operations.GetRtiTransactionsWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiTransactionsWithTagResponse>;
}
