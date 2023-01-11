import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Schedule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listSchedule - Schedule Collection
     *
     * The schedule endpoint produces a linear TV schedule for a given channel and date range.
     *
     *  - The date range supplied must be no larger than 21 days.
     *  - If no end data is passed the API will default to start date + 24 hours.
    **/
    listSchedule(req: operations.ListScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ListScheduleResponse>;
}
