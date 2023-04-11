import { SpeakeasyBase } from "../../../internal/utils";
import { Data } from "./data";
import { TypeEnum1 } from "./typeenum1";
/**
 * The response status for the attendee.
 */
export declare enum CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum {
    Accepted = "accepted",
    Declined = "declined",
    Tentative = "tentative"
}
export declare class CreateCalendarEventResponseRequestDataAttributes extends SpeakeasyBase {
    /**
     * The attendee in the attendees list of the calendar event.
     */
    attendee: Record<string, any>;
    /**
     * The response status for the attendee.
     */
    responseStatus: CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum;
}
export declare class CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent extends SpeakeasyBase {
    data: Data;
}
export declare class CreateCalendarEventResponseRequestDataRelationshipsUser extends SpeakeasyBase {
    data: Data;
}
export declare class CreateCalendarEventResponseRequestDataRelationships extends SpeakeasyBase {
    calendarEvent?: CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent;
    user?: CreateCalendarEventResponseRequestDataRelationshipsUser;
}
export declare class CreateCalendarEventResponseRequestData extends SpeakeasyBase {
    attributes: CreateCalendarEventResponseRequestDataAttributes;
    relationships: CreateCalendarEventResponseRequestDataRelationships;
    type: TypeEnum1;
}
export declare class CreateCalendarEventResponseRequest extends SpeakeasyBase {
    data: CreateCalendarEventResponseRequestData;
}
