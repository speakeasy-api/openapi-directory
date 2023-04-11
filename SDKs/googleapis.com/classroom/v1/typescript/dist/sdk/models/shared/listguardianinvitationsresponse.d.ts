import { SpeakeasyBase } from "../../../internal/utils";
import { GuardianInvitation } from "./guardianinvitation";
/**
 * Response when listing guardian invitations.
 */
export declare class ListGuardianInvitationsResponse extends SpeakeasyBase {
    /**
     * Guardian invitations that matched the list request.
     */
    guardianInvitations?: GuardianInvitation[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
