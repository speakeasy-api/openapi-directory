import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Stop watching resources through this channel
     */
    calendarChannelsStop(req: operations.CalendarChannelsStopRequest, security: operations.CalendarChannelsStopSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarChannelsStopResponse>;
}
