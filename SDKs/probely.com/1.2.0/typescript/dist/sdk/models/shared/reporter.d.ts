import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reporting user
 */
export declare class Reporter extends SpeakeasyBase {
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
