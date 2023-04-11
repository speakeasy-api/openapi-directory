import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calendar management
 */
export declare class Calendars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a Calendar
     */
    deleteCalendarsId(req: operations.DeleteCalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCalendarsIdResponse>;
    /**
     * Fetch a list of Calendars
     *
     * @remarks
     * Without params, it returns a list of Calendars the user has access to
     */
    getCalendars(req: operations.GetCalendarsRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarsResponse>;
    /**
     * Create a Calendar
     */
    postCalendars(req: shared.Calendar, config?: AxiosRequestConfig): Promise<operations.PostCalendarsResponse>;
    /**
     * Update a Calendar
     */
    putCalendarsId(req: operations.PutCalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCalendarsIdResponse>;
}
