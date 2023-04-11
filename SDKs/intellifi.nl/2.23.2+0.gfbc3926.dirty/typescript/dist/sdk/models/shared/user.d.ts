import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing user information
 */
export declare class UserInput extends SpeakeasyBase {
    /**
     * Email address
     */
    email?: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Whether or not this is an administrator.
     */
    isAdmin?: boolean;
    /**
     * Whether or not this user is locked and can't change the password.
     */
    isLocked?: boolean;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * Password of the user
     */
    password?: string;
}
/**
 * A JSON object containing the user
 */
export declare class UserOutput extends SpeakeasyBase {
    /**
     * Email address
     */
    email?: string;
    /**
     * First name
     */
    firstName?: string;
    /**
     * Unique identifier for resource.
     */
    id?: string;
    /**
     * Whether or not this is an administrator.
     */
    isAdmin?: boolean;
    /**
     * Whether or not this user is locked and can't change the password.
     */
    isLocked?: boolean;
    /**
     * Last name
     */
    lastName?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeCreated?: string;
    /**
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string for when this resource was created.
     */
    timeUpdated?: string;
    /**
     * Url to the individual resource.
     */
    url?: string;
}
