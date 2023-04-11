import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A person's email address.
 */
export declare class EmailAddress extends SpeakeasyBase {
    /**
     * If the value of type is custom, this property contains the custom type string.
     */
    customType?: string;
    /**
     * The email address.
     */
    emailAddress?: string;
    /**
     * The URL to send email.
     */
    emailUrl?: string;
    /**
     * Indicates if this is the user's primary email. Only one entry can be marked as primary.
     */
    primary?: boolean;
    /**
     * The type of the email account. Acceptable values are: "custom", "home", "other", "work".
     */
    type?: string;
}
