import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachmentContentTypeMeta extends SpeakeasyBase {
    /**
     * The content type description of the attachment.
     */
    description?: string;
    /**
     * The extension type of the attachment.
     */
    extension?: string;
    /**
     * The content type title of the attachment.
     */
    title?: string;
}
export declare class AttachmentVariants extends SpeakeasyBase {
    /**
     * The url of the large version of the attachment.
     */
    largeUrl?: string;
    /**
     * The url of the thumb version of the attachment.
     */
    thumbUrl?: string;
}
/**
 * Success
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * The content type of the attachment.
     */
    contentType?: string;
    contentTypeMeta?: AttachmentContentTypeMeta;
    /**
     * When the attachment was created.
     */
    createdAt?: string;
    /**
     * The file name of the attachment.
     */
    fileName?: string;
    /**
     * The unique identifier of the attachment
     */
    id?: number;
    /**
     * The url of the attachment.
     */
    originalUrl?: string;
    /**
     * The title of the attachment. If blank or not provided, the title will be derived from the file name.
     */
    title?: string;
    /**
     * The type of attachment.
     */
    type?: string;
    /**
     * When the attachment was last updated.
     */
    updatedAt?: string;
    variants?: AttachmentVariants;
}
