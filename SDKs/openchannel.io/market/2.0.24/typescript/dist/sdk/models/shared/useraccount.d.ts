import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A User Account
 */
export declare class UserAccount extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The contact email address
     */
    email?: string;
    /**
     * The name for the account
     */
    name?: string;
    /**
     * The id of this user account
     */
    userAccountId: string;
    /**
     * The id of this user that this account belongs to
     */
    userId: string;
}
