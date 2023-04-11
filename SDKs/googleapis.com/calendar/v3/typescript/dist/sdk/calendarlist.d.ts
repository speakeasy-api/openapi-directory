import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CalendarList {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a calendar from the user's calendar list.
     */
    calendarCalendarListDelete(req: operations.CalendarCalendarListDeleteRequest, security: operations.CalendarCalendarListDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListDeleteResponse>;
    /**
     * Returns a calendar from the user's calendar list.
     */
    calendarCalendarListGet(req: operations.CalendarCalendarListGetRequest, security: operations.CalendarCalendarListGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListGetResponse>;
    /**
     * Inserts an existing calendar into the user's calendar list.
     */
    calendarCalendarListInsert(req: operations.CalendarCalendarListInsertRequest, security: operations.CalendarCalendarListInsertSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListInsertResponse>;
    /**
     * Returns the calendars on the user's calendar list.
     */
    calendarCalendarListList(req: operations.CalendarCalendarListListRequest, security: operations.CalendarCalendarListListSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListListResponse>;
    /**
     * Updates an existing calendar on the user's calendar list. This method supports patch semantics.
     */
    calendarCalendarListPatch(req: operations.CalendarCalendarListPatchRequest, security: operations.CalendarCalendarListPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListPatchResponse>;
    /**
     * Updates an existing calendar on the user's calendar list.
     */
    calendarCalendarListUpdate(req: operations.CalendarCalendarListUpdateRequest, security: operations.CalendarCalendarListUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListUpdateResponse>;
    /**
     * Watch for changes to CalendarList resources.
     */
    calendarCalendarListWatch(req: operations.CalendarCalendarListWatchRequest, security: operations.CalendarCalendarListWatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarListWatchResponse>;
}
