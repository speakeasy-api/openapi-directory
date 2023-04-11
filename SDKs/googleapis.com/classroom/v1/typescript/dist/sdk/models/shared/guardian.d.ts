import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
/**
 * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
 */
export declare class Guardian extends SpeakeasyBase {
    /**
     * Identifier for the guardian.
     */
    guardianId?: string;
    /**
     * Global information for a user.
     */
    guardianProfile?: UserProfile;
    /**
     * The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.
     */
    invitedEmailAddress?: string;
    /**
     * Identifier for the student to whom the guardian relationship applies.
     */
    studentId?: string;
}
