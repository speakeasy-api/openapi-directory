import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Assigned user
 */
export declare class Assignee extends SpeakeasyBase {
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
