import { SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";
/**
 * Response message for AccessControl.ListInvitations.
 */
export declare class ListInvitationsResponse extends SpeakeasyBase {
    /**
     * A collection of invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.
     */
    invitations?: Invitation[];
}
