import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserEmailsResponse extends SpeakeasyBase {
    /**
     * Whether this email address is the primary address.
     */
    primary?: boolean;
    /**
     * The type of email address.
     */
    type?: string;
    /**
     * The email address.
     */
    value: string;
}
