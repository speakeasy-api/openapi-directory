import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUserInvitation } from "./clientuserinvitation";
/**
 * Successful response
 */
export declare class ListClientUserInvitationsResponse extends SpeakeasyBase {
    /**
     * The returned list of client users.
     */
    invitations?: ClientUserInvitation[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
