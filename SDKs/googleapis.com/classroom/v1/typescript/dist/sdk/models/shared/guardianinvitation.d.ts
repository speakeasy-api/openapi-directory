import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state that this invitation is in.
 */
export declare enum GuardianInvitationStateEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}
/**
 * An invitation to become the guardian of a specified user, sent to a specified email address.
 */
export declare class GuardianInvitation extends SpeakeasyBase {
    /**
     * The time that this invitation was created. Read-only.
     */
    creationTime?: string;
    /**
     * Unique identifier for this invitation. Read-only.
     */
    invitationId?: string;
    /**
     * Email address that the invitation was sent to. This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string;
    /**
     * The state that this invitation is in.
     */
    state?: GuardianInvitationStateEnum;
    /**
     * ID of the student (in standard format)
     */
    studentId?: string;
}
