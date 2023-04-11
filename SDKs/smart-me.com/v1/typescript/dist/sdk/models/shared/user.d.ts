import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Class for the Web API
 */
export declare class User extends SpeakeasyBase {
    /**
     * The Users created by this users.
     */
    childUsers?: User[];
    /**
     * The EMail Address of the User
     */
    email?: string;
    /**
     * The ID of the User
     */
    id?: number;
    /**
     * The ID of the user as string
     */
    idAsString?: string;
    /**
     * Flag if this User is an Admin User
     */
    isAdmin?: boolean;
    /**
     * Additional Permissions
     */
    permissions?: string[];
    /**
     * The Username of the User
     */
    username?: string;
}
