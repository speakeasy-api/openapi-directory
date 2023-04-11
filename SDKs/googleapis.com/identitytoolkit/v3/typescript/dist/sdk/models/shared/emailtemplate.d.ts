import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template for an email template.
 */
export declare class EmailTemplate extends SpeakeasyBase {
    /**
     * Email body.
     */
    body?: string;
    /**
     * Email body format.
     */
    format?: string;
    /**
     * From address of the email.
     */
    from?: string;
    /**
     * From display name.
     */
    fromDisplayName?: string;
    /**
     * Reply-to address.
     */
    replyTo?: string;
    /**
     * Subject of the email.
     */
    subject?: string;
}
