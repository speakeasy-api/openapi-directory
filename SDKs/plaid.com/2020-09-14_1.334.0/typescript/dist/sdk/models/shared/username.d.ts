import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The full name provided by the user. If the user has not submitted their name, this field will be null. Otherwise, both fields are guaranteed to be filled.
 */
export declare class UserName extends SpeakeasyBase {
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     */
    familyName: string;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     */
    givenName: string;
}
