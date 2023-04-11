import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Methods to search for target or diseases.
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search for a disease or a target
     *
     * @remarks
     * This method allows you to look for gene or diseases of interest using a free text search,
     * replicating the functionality of the search box on our homepage. It should be used to identify
     * the best match for a disease or target of interest, rather than gathering a specific set of evidence.
     *
     */
    getSearch(req: operations.GetSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchResponse>;
}
