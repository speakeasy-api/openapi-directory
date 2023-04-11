import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";
/**
 * The source of the attachment.
 */
export declare enum AttachmentSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    DriveFile = "DRIVE_FILE",
    UploadedContent = "UPLOADED_CONTENT"
}
/**
 * An attachment in Google Chat.
 */
export declare class AttachmentInput extends SpeakeasyBase {
    attachmentDataRef?: AttachmentDataRef;
    /**
     * The original file name for the content, not the full path.
     */
    contentName?: string;
    /**
     * The content type (MIME type) of the file.
     */
    contentType?: string;
    /**
     * A reference to the data of a drive attachment.
     */
    driveDataRef?: DriveDataRef;
    /**
     * Resource name of the attachment, in the form "spaces/* /messages/* /attachments/*".
     */
    name?: string;
    /**
     * The source of the attachment.
     */
    source?: AttachmentSourceEnum;
}
/**
 * An attachment in Google Chat.
 */
export declare class Attachment extends SpeakeasyBase {
    attachmentDataRef?: AttachmentDataRef;
    /**
     * The original file name for the content, not the full path.
     */
    contentName?: string;
    /**
     * The content type (MIME type) of the file.
     */
    contentType?: string;
    /**
     * Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps should not use this URL to download attachment content.
     */
    downloadUri?: string;
    /**
     * A reference to the data of a drive attachment.
     */
    driveDataRef?: DriveDataRef;
    /**
     * Resource name of the attachment, in the form "spaces/* /messages/* /attachments/*".
     */
    name?: string;
    /**
     * The source of the attachment.
     */
    source?: AttachmentSourceEnum;
    /**
     * Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps should not use this URL to download attachment content.
     */
    thumbnailUri?: string;
}
