import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A User
 */
export declare class User extends SpeakeasyBase {
    /**
     * The date (in millis) of when this user was created
     */
    created: number;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData: Record<string, any>;
    /**
     * The user's email
     */
    email?: string;
    /**
     * The user's name
     */
    name?: string;
    /**
     * The type for this user
     */
    type?: string;
    /**
     * The id of this user
     */
    userId: string;
}
