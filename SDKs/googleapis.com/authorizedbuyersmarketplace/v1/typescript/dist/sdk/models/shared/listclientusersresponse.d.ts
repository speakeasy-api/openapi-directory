import { SpeakeasyBase } from "../../../internal/utils";
import { ClientUser } from "./clientuser";
/**
 * Response message for the list method.
 */
export declare class ListClientUsersResponse extends SpeakeasyBase {
    /**
     * The returned list of client users.
     */
    clientUsers?: ClientUser[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
