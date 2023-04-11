import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmbeddedAttendeeResource extends SpeakeasyBase {
    /**
     * Datetime of when the attendee was deleted
     */
    deletedAt?: Date;
    /**
     * Email of the attendee
     */
    email?: string;
    /**
     * Name of the attendee
     */
    name?: string;
    /**
     * Whether the attendee is the organizer of the event.
     */
    organizer?: boolean;
    /**
     * The attendee's response status. Possible values are: needsAction, accepted, tentative, declined
     */
    status?: string;
    /**
     * Whether the attendee changed response status
     */
    statusChanged?: boolean;
}
