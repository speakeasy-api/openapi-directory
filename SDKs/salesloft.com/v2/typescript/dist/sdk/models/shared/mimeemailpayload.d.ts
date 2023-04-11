import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class MimeEmailPayload extends SpeakeasyBase {
    /**
     * Email ID
     */
    id?: number;
    /**
     * Email Address of Sender's mailbox
     */
    mailbox?: string;
    /**
     * Unique Message ID
     */
    messageId?: string;
    /**
     * Base64 encoded MIME email content
     */
    raw?: string;
}
