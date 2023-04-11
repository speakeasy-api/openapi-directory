import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserNameResponse extends SpeakeasyBase {
    /**
     * The family name of the user.
     */
    familyName?: string;
    /**
     * The full name, including all middle names, titles, and suffixes as appropriate, formatted for display.
     */
    formatted?: string;
    /**
     * The given name of the user.
     */
    givenName?: string;
    /**
     * The middle name(s) of the user.
     */
    middleName?: string;
}
