import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * User list response.
 */
export declare class UsersListResponse extends SpeakeasyBase {
    /**
     * List of user resources in the instance.
     */
    items?: User[];
    /**
     * This is always `sql#usersList`.
     */
    kind?: string;
    /**
     * Unused.
     */
    nextPageToken?: string;
}
