import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Colors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the color definitions for calendars and events.
     */
    calendarColorsGet(req: operations.CalendarColorsGetRequest, security: operations.CalendarColorsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarColorsGetResponse>;
}
