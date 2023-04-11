import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SavedColumns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the list of saved columns for a specified advertiser.
     */
    doubleclicksearchSavedColumnsList(req: operations.DoubleclicksearchSavedColumnsListRequest, security: operations.DoubleclicksearchSavedColumnsListSecurity, config?: AxiosRequestConfig): Promise<operations.DoubleclicksearchSavedColumnsListResponse>;
}
