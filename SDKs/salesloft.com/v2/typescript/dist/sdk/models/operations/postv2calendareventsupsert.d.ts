import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2CalendarEventsUpsertRequestBody extends SpeakeasyBase {
    /**
     * Should be set to `true` for all day calendar events.
     */
    allDay?: boolean;
    /**
     *   List of attendees of the calendar event.
     *
     * @remarks
     *   Example:
     *   ```
     *     {
     *       ...
     *       "attendees": [
     *         {
     *           "name": "Alice",
     *           "email": "alice@example.com",
     *           "status": "accepted",
     *           "organizer": true
     *         },
     *         {
     *           "name": "Bob",
     *           "email": "bob@example.com",
     *           "status": "needsAction",
     *           "organizer": false
     *         }
     *       ]
     *     }
     *   ```
     *   `name`: full name of the attendee
     *
     *   `email`: email address of the attendee
     *
     *   `status`: one of the following - needsAction, accepted, tentative, declined
     *
     *   `organizer`: whether the attendee is the organizer of the calendar event
     *
     */
    attendees?: Record<string, any>;
    /**
     *   Calendar ID of the calendar event owner.
     *
     * @remarks
     *   For the External Calendar connection use `external_{salesloft_user_guid}` format.
     *   Example: `external_00210d1a-df8a-459f-af75-89b953b618b0`.
     *
     */
    calendarId: string;
    /**
     *   Cancellation time of the calendar event, as a combined date-time value in the ISO 8601 format with a time zone offset.
     *
     * @remarks
     *   Example: `2022-02-14T10:12:59+00:00`.
     *
     */
    canceledAt?: string;
    /**
     * Description of the calendar event
     */
    description?: string;
    /**
     *   End time of the calendar event, as a combined date-time value in the ISO 8601 format with a time zone offset.
     *
     * @remarks
     *   Example: `2022-02-14T10:12:59+00:00`.
     *
     */
    endTime: Date;
    /**
     *   icalUID of the calendar event. Unique identifier for a calendar event across calendars.
     *
     * @remarks
     *
     *   Used as an upsert key.
     *
     */
    iCalUid: string;
    /**
     *   Id of the calendar event, different for each occurrence in a recurring series.
     *
     * @remarks
     *
     *   Used as an upsert key.
     *
     */
    id: string;
    /**
     * Location of the calendar event as free-form text.
     */
    location?: string;
    /**
     *   Email address of the organizer
     *
     * @remarks
     *
     */
    organizer?: string;
    /**
     * Should be set to `true` if this is one of recurring series calendar event.
     */
    recurring?: boolean;
    /**
     *   Start time of the calendar event, as a combined date-time value in the ISO 8601 format with a time zone offset.
     *
     * @remarks
     *   Example: `2022-02-14T10:12:59+00:00`.
     *
     */
    startTime: Date;
    /**
     *   Status of the calendar event. Depending on the status, the calendar event will or will not impact user's availability.
     *
     * @remarks
     *   Possible values: `confirmed`, `tentative`, `cancelled`.
     *   Example: `confirmed`.
     *
     */
    status?: string;
    /**
     * Title of the calendar event
     */
    title?: string;
}
export declare class PostV2CalendarEventsUpsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
