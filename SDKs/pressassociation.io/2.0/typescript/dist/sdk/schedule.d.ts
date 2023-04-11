import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Schedule {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Schedule Collection
     *
     * @remarks
     * The schedule endpoint produces a linear TV schedule for a given channel and date range.
     *
     *  - The date range supplied must be no larger than 21 days.
     *  - If no end data is passed the API will default to start date + 24 hours.
     */
    listSchedule(req: operations.ListScheduleRequest, security: operations.ListScheduleSecurity, config?: AxiosRequestConfig): Promise<operations.ListScheduleResponse>;
}
