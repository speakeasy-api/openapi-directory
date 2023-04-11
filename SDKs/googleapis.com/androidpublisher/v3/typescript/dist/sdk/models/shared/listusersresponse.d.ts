import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A response containing one or more users with access to an account.
 */
export declare class ListUsersResponse extends SpeakeasyBase {
    /**
     * A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * The resulting users.
     */
    users?: User[];
}
