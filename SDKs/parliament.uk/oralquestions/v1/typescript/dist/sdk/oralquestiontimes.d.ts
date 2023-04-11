import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OralQuestionTimes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of oral question times
     *
     * @remarks
     * A list of oral question times meeting the specified criteria.
     */
    publishedOralQuestionTimeGet(req: operations.PublishedOralQuestionTimeGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedOralQuestionTimeGetResponse>;
}
