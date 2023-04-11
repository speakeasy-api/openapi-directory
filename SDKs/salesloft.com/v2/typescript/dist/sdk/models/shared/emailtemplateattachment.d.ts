import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
export declare class EmailTemplateAttachment extends SpeakeasyBase {
    /**
     * Content type of the attachment
     */
    attachmentContentType?: string;
    /**
     * The size of the attachment
     */
    attachmentFileSize?: number;
    /**
     * Unique attachment Identifier
     */
    attachmentFingerprint?: number;
    /**
     * ID of the email template attachment
     */
    attachmentId?: number;
    /**
     * Download url of the attachment
     */
    downloadUrl?: string;
    emailTemplate?: EmbeddedResource;
    /**
     * ID of email template attachment association
     */
    id?: number;
    /**
     * Name of the attachment
     */
    name?: string;
    /**
     * Checks if attachment has been scanned
     */
    scanned?: boolean;
}
