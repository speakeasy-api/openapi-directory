import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User that last modified the object
 */
export declare class ChangedBy extends SpeakeasyBase {
    /**
     * User's email (changing this resets the user's password and revokes existing tokens)
     */
    email?: string;
    /**
     * User's id
     */
    id?: string;
    /**
     * User's name
     */
    name?: string;
}
