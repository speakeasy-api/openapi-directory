import { SpeakeasyBase } from "../../../internal/utils";
import { EmailCounts } from "./emailcounts";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Email extends SpeakeasyBase {
    action?: EmbeddedResource;
    /**
     * Whether this email bounced
     */
    bounced?: boolean;
    cadence?: EmbeddedResource;
    /**
     * Whether this email had click tracking enabled
     */
    clickTracking?: boolean;
    counts?: EmailCounts;
    /**
     * Datetime of when the email was created
     */
    createdAt?: Date;
    crmActivity?: EmbeddedResource;
    emailTemplate?: EmbeddedResource;
    /**
     * Error message of the email. This field has been determined sensitive and requires a specific scope to access it.
     */
    errorMessage?: string;
    /**
     * Selected headers that are included if this email used them. Available keys are: cc, bcc
     */
    headers?: Record<string, any>;
    /**
     * ID of Email
     */
    id?: number;
    mailing?: EmbeddedResource;
    /**
     * Percentage of this email that has been personalized
     */
    personalization?: string;
    recipient?: EmbeddedResource;
    /**
     * Email address of the recipient
     */
    recipientEmailAddress?: string;
    /**
     * When this email will be sent, or null if already sent
     */
    sendAfter?: Date;
    /**
     * When this email was sent, or null if it was not sent
     */
    sentAt?: Date;
    /**
     * Status of this email through the sending process. Possible values are: sent, sent_from_gmail, sent_from_external, pending, pending_reply_check, scheduled, sending, delivering, failed, cancelled, pending_through_gmail, pending_through_external
     */
    status?: string;
    step?: EmbeddedResource;
    /**
     * Subject of the email. This field has been determined sensitive and requires a specific scope to access it.
     */
    subject?: string;
    task?: EmbeddedResource;
    /**
     * Datetime of when the email was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
    /**
     * Whether this email had view tracking enabled
     */
    viewTracking?: boolean;
}
