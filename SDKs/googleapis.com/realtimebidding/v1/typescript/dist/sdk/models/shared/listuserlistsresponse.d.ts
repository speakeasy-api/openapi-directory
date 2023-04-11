import { SpeakeasyBase } from "../../../internal/utils";
import { UserList } from "./userlist";
/**
 * The list user list response.
 */
export declare class ListUserListsResponse extends SpeakeasyBase {
    /**
     * The continuation page token to send back to the server in a subsequent request. Due to a currently known issue, it is recommended that the caller keep invoking the list method till the time a next page token is not returned (even if the result set is empty).
     */
    nextPageToken?: string;
    /**
     * List of user lists from the search.
     */
    userLists?: UserList[];
}
