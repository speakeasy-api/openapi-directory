import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Freebusy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns free/busy information for a set of calendars.
     */
    calendarFreebusyQuery(req: operations.CalendarFreebusyQueryRequest, security: operations.CalendarFreebusyQuerySecurity, config?: AxiosRequestConfig): Promise<operations.CalendarFreebusyQueryResponse>;
}
