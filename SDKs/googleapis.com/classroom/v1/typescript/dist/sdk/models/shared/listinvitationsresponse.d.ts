import { SpeakeasyBase } from "../../../internal/utils";
import { Invitation } from "./invitation";
/**
 * Response when listing invitations.
 */
export declare class ListInvitationsResponse extends SpeakeasyBase {
    /**
     * Invitations that match the list request.
     */
    invitations?: Invitation[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
