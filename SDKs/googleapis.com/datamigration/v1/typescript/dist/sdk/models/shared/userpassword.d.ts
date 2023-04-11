import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
 */
export declare class UserPassword extends SpeakeasyBase {
    /**
     * The initial password for the user.
     */
    password?: string;
    /**
     * Output only. Indicates if the initial_user.password field has been set.
     */
    passwordSet?: boolean;
    /**
     * The database username.
     */
    user?: string;
}
/**
 * The username/password for a database user. Used for specifying initial users at cluster creation time.
 */
export declare class UserPasswordInput extends SpeakeasyBase {
    /**
     * The initial password for the user.
     */
    password?: string;
    /**
     * The database username.
     */
    user?: string;
}
