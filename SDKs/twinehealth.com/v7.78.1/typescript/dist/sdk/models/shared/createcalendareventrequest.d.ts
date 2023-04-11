import { SpeakeasyBase } from "../../../internal/utils";
import { Data } from "./data";
import { TypeEnum } from "./typeenum";
/**
 * Status of responses from attendees
 */
export declare enum CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum {
    NeedsAction = "needsAction",
    Declined = "declined",
    Tentative = "tentative",
    Accepted = "accepted"
}
export declare class CreateCalendarEventRequestDataAttributesAttendees extends SpeakeasyBase {
    /**
     * Status of responses from attendees
     */
    responseStatus?: CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum;
    user?: string;
}
/**
 * The type of calendar event. Immutable after event creation.
 */
export declare enum CreateCalendarEventRequestDataAttributesTypeEnum {
    PlanCheckIn = "plan-check-in",
    Reminder = "reminder",
    TelephoneCall = "telephone-call",
    OfficeVisit = "office-visit",
    VideoCall = "video-call"
}
export declare class CreateCalendarEventRequestDataAttributes extends SpeakeasyBase {
    /**
     * True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day.
     */
    allDay?: boolean;
    /**
     * List of attendees for the calendar event
     */
    attendees: CreateCalendarEventRequestDataAttributesAttendees[];
    /**
     * The date and time when the calendar event is marked as completed. Only valid for `plan-check-in` event type.
     */
    completedAt?: string;
    /**
     * The coach who marked the calendar event as completed. Only valid for `plan-check-in` event type.
     */
    completedBy?: Record<string, any>;
    description?: string;
    /**
     * The date and time when the calendar event ends. Not valid for `plan-check-in` event type.
     */
    endAt?: string;
    location?: string;
    /**
     * The date and time when the calendar event starts
     */
    startAt: string;
    /**
     * The time zone in which the dates for the calendar event are specified
     */
    timeZone?: string;
    /**
     * The title of the calendar event. Must not be empty or null
     */
    title: string;
    /**
     * The type of calendar event. Immutable after event creation.
     */
    type: CreateCalendarEventRequestDataAttributesTypeEnum;
}
export declare class CreateCalendarEventRequestDataRelationshipsOwner extends SpeakeasyBase {
    data: Data;
}
export declare class CreateCalendarEventRequestDataRelationships extends SpeakeasyBase {
    owner?: CreateCalendarEventRequestDataRelationshipsOwner;
}
export declare class CreateCalendarEventRequestData extends SpeakeasyBase {
    attributes: CreateCalendarEventRequestDataAttributes;
    relationships: CreateCalendarEventRequestDataRelationships;
    type: TypeEnum;
}
export declare class CreateCalendarEventRequest extends SpeakeasyBase {
    data: CreateCalendarEventRequestData;
}
