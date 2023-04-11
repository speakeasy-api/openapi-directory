import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents media content, such as a photo, that can be attached to a timeline item.
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * The MIME type of the attachment.
     */
    contentType?: string;
    /**
     * The URL for the content.
     */
    contentUrl?: string;
    /**
     * The ID of the attachment.
     */
    id?: string;
    /**
     * Indicates that the contentUrl is not available because the attachment content is still being processed. If the caller wishes to retrieve the content, it should try again later.
     */
    isProcessingContent?: boolean;
}
