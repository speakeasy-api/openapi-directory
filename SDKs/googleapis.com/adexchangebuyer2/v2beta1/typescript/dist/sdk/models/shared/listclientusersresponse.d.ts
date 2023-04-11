import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";
/**
 * Successful response
 */
export declare class ListClientUsersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The returned list of client users.
     */
    users?: ClientUser[];
}
