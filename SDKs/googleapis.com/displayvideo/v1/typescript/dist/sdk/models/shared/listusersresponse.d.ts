import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Successful response
 */
export declare class ListUsersResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListUsers` method to retrieve the next page of results. This token will be absent if there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The list of users. This list will be absent if empty.
     */
    users?: User[];
}
