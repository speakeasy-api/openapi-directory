import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an event.
     */
    calendarEventsDelete(req: operations.CalendarEventsDeleteRequest, security: operations.CalendarEventsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsDeleteResponse>;
    /**
     * Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
     */
    calendarEventsGet(req: operations.CalendarEventsGetRequest, security: operations.CalendarEventsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsGetResponse>;
    /**
     * Imports an event. This operation is used to add a private copy of an existing event to a calendar.
     */
    calendarEventsImport(req: operations.CalendarEventsImportRequest, security: operations.CalendarEventsImportSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsImportResponse>;
    /**
     * Creates an event.
     */
    calendarEventsInsert(req: operations.CalendarEventsInsertRequest, security: operations.CalendarEventsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsInsertResponse>;
    /**
     * Returns instances of the specified recurring event.
     */
    calendarEventsInstances(req: operations.CalendarEventsInstancesRequest, security: operations.CalendarEventsInstancesSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsInstancesResponse>;
    /**
     * Returns events on the specified calendar.
     */
    calendarEventsList(req: operations.CalendarEventsListRequest, security: operations.CalendarEventsListSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsListResponse>;
    /**
     * Moves an event to another calendar, i.e. changes an event's organizer.
     */
    calendarEventsMove(req: operations.CalendarEventsMoveRequest, security: operations.CalendarEventsMoveSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsMoveResponse>;
    /**
     * Updates an event. This method supports patch semantics.
     */
    calendarEventsPatch(req: operations.CalendarEventsPatchRequest, security: operations.CalendarEventsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsPatchResponse>;
    /**
     * Creates an event based on a simple text string.
     */
    calendarEventsQuickAdd(req: operations.CalendarEventsQuickAddRequest, security: operations.CalendarEventsQuickAddSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsQuickAddResponse>;
    /**
     * Updates an event.
     */
    calendarEventsUpdate(req: operations.CalendarEventsUpdateRequest, security: operations.CalendarEventsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsUpdateResponse>;
    /**
     * Watch for changes to Events resources.
     */
    calendarEventsWatch(req: operations.CalendarEventsWatchRequest, security: operations.CalendarEventsWatchSecurity, config?: AxiosRequestConfig): Promise<operations.CalendarEventsWatchResponse>;
}
