import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the user's name.
 */
export declare class Name extends SpeakeasyBase {
    /**
     * The user's last name. Read-only.
     */
    familyName?: string;
    /**
     * The user's full name formed by concatenating the first and last name values. Read-only.
     */
    fullName?: string;
    /**
     * The user's first name. Read-only.
     */
    givenName?: string;
}
