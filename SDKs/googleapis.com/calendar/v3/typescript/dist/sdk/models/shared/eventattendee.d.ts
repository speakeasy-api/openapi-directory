import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventAttendee extends SpeakeasyBase {
    /**
     * Number of additional guests. Optional. The default is 0.
     */
    additionalGuests?: number;
    /**
     * The attendee's response comment. Optional.
     */
    comment?: string;
    /**
     * The attendee's name, if available. Optional.
     */
    displayName?: string;
    /**
     * The attendee's email address, if available. This field must be present when adding an attendee. It must be a valid email address as per RFC5322.
     *
     * @remarks
     * Required when adding an attendee.
     */
    email?: string;
    /**
     * The attendee's Profile ID, if available.
     */
    id?: string;
    /**
     * Whether this is an optional attendee. Optional. The default is False.
     */
    optional?: boolean;
    /**
     * Whether the attendee is the organizer of the event. Read-only. The default is False.
     */
    organizer?: boolean;
    /**
     * Whether the attendee is a resource. Can only be set when the attendee is added to the event for the first time. Subsequent modifications are ignored. Optional. The default is False.
     */
    resource?: boolean;
    /**
     * The attendee's response status. Possible values are:
     *
     * @remarks
     * - "needsAction" - The attendee has not responded to the invitation (recommended for new events).
     * - "declined" - The attendee has declined the invitation.
     * - "tentative" - The attendee has tentatively accepted the invitation.
     * - "accepted" - The attendee has accepted the invitation.  Warning: If you add an event using the values declined, tentative, or accepted, attendees with the "Add invitations to my calendar" setting set to "When I respond to invitation in email" won't see an event on their calendar unless they choose to change their invitation response in the event invitation email.
     */
    responseStatus?: string;
    /**
     * Whether this entry represents the calendar on which this copy of the event appears. Read-only. The default is False.
     */
    self?: boolean;
}
