import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventAttachment extends SpeakeasyBase {
    /**
     * ID of the attached file. Read-only.
     *
     * @remarks
     * For Google Drive files, this is the ID of the corresponding Files resource entry in the Drive API.
     */
    fileId?: string;
    /**
     * URL link to the attachment.
     *
     * @remarks
     * For adding Google Drive file attachments use the same format as in alternateLink property of the Files resource in the Drive API.
     * Required when adding an attachment.
     */
    fileUrl?: string;
    /**
     * URL link to the attachment's icon. This field can only be modified for custom third-party attachments.
     */
    iconLink?: string;
    /**
     * Internet media type (MIME type) of the attachment.
     */
    mimeType?: string;
    /**
     * Attachment title.
     */
    title?: string;
}
