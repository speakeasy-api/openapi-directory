import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of responses from attendees
 */
export declare enum CalendarEventResourceAttributesAttendeesResponseStatusEnum {
    NeedsAction = "needsAction",
    Declined = "declined",
    Tentative = "tentative",
    Accepted = "accepted"
}
export declare class CalendarEventResourceAttributesAttendees extends SpeakeasyBase {
    /**
     * Status of responses from attendees
     */
    responseStatus?: CalendarEventResourceAttributesAttendeesResponseStatusEnum;
    user?: string;
}
/**
 * The type of calendar event. Immutable after event creation.
 */
export declare enum CalendarEventResourceAttributesTypeEnum {
    PlanCheckIn = "plan-check-in",
    Reminder = "reminder",
    TelephoneCall = "telephone-call",
    OfficeVisit = "office-visit",
    VideoCall = "video-call"
}
export declare class CalendarEventResourceAttributes extends SpeakeasyBase {
    /**
     * True if the calendar event is an all day event, false otherwise. Must be set to true for `plan-check-in` event type. If it is true, then `start_at` and `end_at` must also be set to beginning of day, except `plan-check-in` event type does not need an `end_at` date. If it is false, then `start_at` and `end_at` must be on the same day.
     */
    allDay?: boolean;
    /**
     * List of attendees for the calendar event
     */
    attendees?: CalendarEventResourceAttributesAttendees[];
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
    startAt?: string;
    /**
     * The time zone in which the dates for the calendar event are specified
     */
    timeZone?: string;
    /**
     * The title of the calendar event. Must not be empty or null
     */
    title?: string;
    /**
     * The type of calendar event. Immutable after event creation.
     */
    type?: CalendarEventResourceAttributesTypeEnum;
}
export declare class CalendarEventResourceLinks extends SpeakeasyBase {
    self?: string;
}
export declare class CalendarEventResourceRelationshipsOwnerData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class CalendarEventResourceRelationshipsOwnerLinks extends SpeakeasyBase {
    related?: string;
}
/**
 * The owner is the patient for whom the calendar event is created specificially for
 */
export declare class CalendarEventResourceRelationshipsOwner extends SpeakeasyBase {
    data: CalendarEventResourceRelationshipsOwnerData;
    links?: CalendarEventResourceRelationshipsOwnerLinks;
}
export declare class CalendarEventResourceRelationships extends SpeakeasyBase {
    /**
     * The owner is the patient for whom the calendar event is created specificially for
     */
    owner?: CalendarEventResourceRelationshipsOwner;
}
export declare enum CalendarEventResourceTypeEnum {
    CalendarEvent = "calendar_event"
}
export declare class CalendarEventResource extends SpeakeasyBase {
    attributes?: CalendarEventResourceAttributes;
    id?: string;
    links?: CalendarEventResourceLinks;
    relationships?: CalendarEventResourceRelationships;
    type?: CalendarEventResourceTypeEnum;
}
