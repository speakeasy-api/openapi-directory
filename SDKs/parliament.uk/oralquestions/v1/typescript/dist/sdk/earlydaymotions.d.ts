import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EarlyDayMotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a single Early Day Motion by ID
     *
     * @remarks
     * Get a single Early Day Motion which has the ID specified.
     */
    publishedEarlyDayMotionGet(req: operations.PublishedEarlyDayMotionGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedEarlyDayMotionGetResponse>;
    /**
     * Returns a list of Early Day Motions
     *
     * @remarks
     * Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.
     */
    getEarlyDayMotionsList(req: operations.GetEarlyDayMotionsListRequest, config?: AxiosRequestConfig): Promise<operations.GetEarlyDayMotionsListResponse>;
}
