import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A calendar event represents an event involving or relevant to a patient which will or has occurred on a specific date or during a specific period of time.
 */
export declare class CalendarEvent {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create calendar event
     *
     * @remarks
     * Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.
     */
    createCalendarEvent(req: shared.CreateCalendarEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateCalendarEventResponse>;
    /**
     * Delete a calendar event
     *
     * @remarks
     * Delete a calendar event by id
     */
    deleteCalendarEvent(req: operations.DeleteCalendarEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCalendarEventResponse>;
    /**
     * Get a calendar event
     *
     * @remarks
     * Get a calendar event by id
     */
    fetchCalendarEvent(req: operations.FetchCalendarEventRequest, config?: AxiosRequestConfig): Promise<operations.FetchCalendarEventResponse>;
    /**
     * List calendar events
     *
     * @remarks
     * Get a list of calendar events
     */
    fetchCalendarEvents(req: operations.FetchCalendarEventsRequest, config?: AxiosRequestConfig): Promise<operations.FetchCalendarEventsResponse>;
    /**
     * Update a calendar event
     *
     * @remarks
     * Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.
     */
    updateCalendarEvent(req: operations.UpdateCalendarEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCalendarEventResponse>;
}
