import { SpeakeasyBase } from "../../../internal/utils";
import { Photo } from "./photo";
/**
 * A representation of a user.
 */
export declare class User extends SpeakeasyBase {
    /**
     * A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted.
     */
    isDeleted?: boolean;
    /**
     * Whether the user is the authenticated user.
     */
    isMe?: boolean;
    /**
     * The displayable name of the user.
     */
    name?: string;
    /**
     * The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource.
     */
    permissionId?: string;
    /**
     * Photo information for a user.
     */
    photo?: Photo;
}
