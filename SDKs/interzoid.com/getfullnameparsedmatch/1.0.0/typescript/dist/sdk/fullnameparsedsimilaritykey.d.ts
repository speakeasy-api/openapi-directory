import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FullNameParsedSimilarityKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a similarity key for matching purposes for parsed full name data
     *
     * @remarks
     * Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.
     */
    getfullnameparsedmatch(req: operations.GetfullnameparsedmatchRequest, config?: AxiosRequestConfig): Promise<operations.GetfullnameparsedmatchResponse>;
}
