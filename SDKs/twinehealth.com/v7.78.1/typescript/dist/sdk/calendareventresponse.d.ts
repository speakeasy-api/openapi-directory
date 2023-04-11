import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A calendar event response indicates the attendee's response to a calendar event.  Only `POST` for creation is allowed as the responses are updated into the corresponding calendar events.
 */
export declare class CalendarEventResponse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create calendar event response
     *
     * @remarks
     * Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.
     */
    createCalendarEventResponse(req: shared.CreateCalendarEventResponseRequest, config?: AxiosRequestConfig): Promise<operations.CreateCalendarEventResponseResponse>;
}
