import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * A list of Attachments. This is the response from the server to GET requests on the attachments collection.
 */
export declare class AttachmentsListResponse extends SpeakeasyBase {
    /**
     * The list of attachments.
     */
    items?: Attachment[];
    /**
     * The type of resource. This is always mirror#attachmentsList.
     */
    kind?: string;
}
