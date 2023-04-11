import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Calendars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
     */
    calendarCalendarsClear(req: operations.CalendarCalendarsClearRequest, security: operations.CalendarCalendarsClearSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsClearResponse>;
    /**
     * Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
     */
    calendarCalendarsDelete(req: operations.CalendarCalendarsDeleteRequest, security: operations.CalendarCalendarsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsDeleteResponse>;
    /**
     * Returns metadata for a calendar.
     */
    calendarCalendarsGet(req: operations.CalendarCalendarsGetRequest, security: operations.CalendarCalendarsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsGetResponse>;
    /**
     * Creates a secondary calendar.
     */
    calendarCalendarsInsert(req: operations.CalendarCalendarsInsertRequest, security: operations.CalendarCalendarsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsInsertResponse>;
    /**
     * Updates metadata for a calendar. This method supports patch semantics.
     */
    calendarCalendarsPatch(req: operations.CalendarCalendarsPatchRequest, security: operations.CalendarCalendarsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsPatchResponse>;
    /**
     * Updates metadata for a calendar.
     */
    calendarCalendarsUpdate(req: operations.CalendarCalendarsUpdateRequest, security: operations.CalendarCalendarsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarCalendarsUpdateResponse>;
}
