import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reference {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getJournalExpressionSchema - Gets the journal expression data schema
     *
     * Gets the data schema for all available journal expression values. Includes table names, column names and data types.
    **/
    getJournalExpressionSchema(req: operations.GetJournalExpressionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalExpressionSchemaResponse>;
}
